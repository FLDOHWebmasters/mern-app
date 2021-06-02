
const mongodb = require('mongodb');

module.exports = async function (context, req) {
    
    let database = context.dbInstance;
    database = database.db('tracker').collection('users');
    let docs = await database.find().toArray()
    .catch(err => console.error(`Failed to find documents: ${err}`));
    
    
    return docs;
}