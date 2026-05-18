const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('my_database');
    const collection = database.collection('users');
    const result = await collection.insertOne({ name: "Alice", age: 25 });
    console.log(`Document inserted with _id: ${result.insertedId}`);
    const user = await collection.findOne({ name: "Alice" });
    console.log("Found user:", user);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
