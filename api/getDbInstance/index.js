let dbInstance;
const { MongoClient } = require('mongodb');
const uri = process.env["MongoDbAtlasConnectionStr"];

module.exports = async function(context) {
    if (!dbInstance) {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        dbInstance = await client.connect();
    }
    return dbInstance;
};