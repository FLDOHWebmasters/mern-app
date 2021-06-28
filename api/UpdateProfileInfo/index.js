const mongodb = require('mongodb');
const uri = process.env["MongoDbAtlasConnectionStr"];

const jwt = require('jsonwebtoken');

// May be retained between function executions depending on whether Azure
// cleans up memory
let client = null;

module.exports = async function (context, req) {
    context.log('Running');
  
    return client !== null ? query() :  run();
  async function run() {
    try {
        client = new mongodb.MongoClient(uri, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
        });
        await client.connect();
        await query();
    } catch (err) {
        context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
      //context.log("client closed.");
      //client = null;
    }
  }

  async function query() {
      try {
        var token = req.body.access;
        var decodedToken = jwt.decode(token);
        context.log(decodedToken.toString());
        decodedToken = decodedToken.upn;
        req.body['access'] = decodedToken.toString();
        context.log(decodedToken.toString())
        let findExistingUser = await client.db('tracker').collection('users').find({'access': req.body['access']})
        .toArray()
        .catch(err => console.error(`Insert failed: ${err}`));
        context.log(findExistingUser)
        if (findExistingUser.length === 0) {
            let docs = await client.db('tracker').collection('users').insertOne(req.body)
            .catch(err => console.error(`Insert failed: ${err}`));
            return (context.res = {
                status: 200,
                body: docs,
              });
        }
        else {
            let docs = await client.db('tracker').collection('users').updateOne({'email': req.body['access']}, {$set: req.body})
            .catch(err => console.error(`Insert failed: ${err}`));
            return (context.res = {
                status: 200,
                body: docs,
              });
        }

      } catch (err) {
         context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
      }       
    };

};

