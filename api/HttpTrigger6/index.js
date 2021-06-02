const mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
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
    } 
  }

  async function query() {
      try {      
        var token = req.headers.access;
        console.log(token);       
        var decodedToken = jwt.decode(token);
        decodedToken = decodedToken.upn
        let docs = await client.db('tracker').collection('people').find({"access" : decodedToken})
        .toArray()
        .catch(err => console.error(`Failed to find documents: ${err}`));
        console.log(docs);
        return (context.res = {
            status: 200,
            body: JSON.parse(JSON.stringify(docs)),
        });
      } catch (err) {
         context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
      }  
    };
};

