const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/fsdatabase';

// MongoDB collection name
const collectionName = 'mycollection';

// Set up a route to fetch data from MongoDB and send it as an API response
app.get('/data', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Get a reference to the database and collection
    const db = client.db();
    const collection = db.collection(collectionName);

    // Query the collection to get all documents
    const documents = await collection.find().toArray();

    // Close the MongoDB client connection
    await client.close();

    // Send the documents as the API response
    res.json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
