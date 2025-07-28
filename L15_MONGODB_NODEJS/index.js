const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'MongoDB-DB-G5';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Students');

  const dataAdd = await collection.insertMany([
    {
        name:"Priyanshu",
        empId:294021,
        class:"G6"
    },
    {
        name:"Prisha",
        empId:29402133,
        class:"G5"
    },
    
  ]);
  console.log(dataAdd);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());