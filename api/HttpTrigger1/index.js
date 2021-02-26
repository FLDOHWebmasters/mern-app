const mongodb = require('mongodb');

const uri = "mongodb+srv://webmasters:6E8uMBf3iD89qBx@fdoh.9yjzv.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// May be retained between function executions depending on whether Azure
// cleans up memory
let client = null;


module.exports = async function (context, req) {
    context.log('Running');

    let hasClient = client != null;
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
    }
  }

  async function query() {
      try {
          
        let docs = await client.db('tracker').collection('users').find().toArray()
        .catch(err => console.error(`Failed to find documents: ${err}`));
        
        console.log(docs);
        return (context.res = {
            status: 200,
            body: docs,
          });
      } catch (err) {
         context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
      }
    
          
    };
  
};