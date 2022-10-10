const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('fruits');
    console.log(`Connected to database ${db.databaseName}`);

     const products = db.collection('products');
    // const printName = products.find({name:'Apple'});

    // ? For Each functional Iteration
    // await printName.forEach(products=>console.log(products));

    // ? Return an array of all document
    // ! For use case that require all documents matched by a query to be held in memory at the same time.
    // const allValues = await printName.toArray();
    // console.log(allValues);

    // ? Asynchronous Iteration
    // console.log("async");
    // for await(const products of printName){
    //   console.log(products);
    // }

    // ? Manual Iteration
    // while(await products.hasNext){
    //   console.log(await products.next())
    // }

    // ? Stream API
    // printName.stream().on("data", products=>console.log(products))

    // ? Event API
    // printName.on("data", data=>console.log(data));

    // ! Cursor utility Methods

    // ? Count
    // const count = await printName.estimatedDocumentCount;
    // console.log(count);

    // ? Rewind
    // const firstResult = await printName.toArray();
    // console.log("First count: " + firstResult.length);
    // await printName.rewind();
    // const secondResult = await printName.toArray();
    // console.log("Second count: " + secondResult.length);

    // ? Close
    // await printName.close();

    // ! Retrieve Distinct Values
    // const distinctValues = products.distinct("name")

    // await distinctValues.forEach(console.dir); //This give a warning
    // await (await distinctValues).forEach(console.dir); // while this doesn't.

    // ? Query Parameter
    // const query = { _id: {$gt: 1}};
    // const filteredContent = products.distinct("name", query);
    // await (await filteredContent).forEach(console.dir);

    // await distinctValues.close;

    // ! Write Operations

    // ? Insert single entry
    // const doc = { _id : 6, name: 'Pineapple', review: 'Labourious'};
    // const result = await products.insertOne(doc);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`)

    // ? Insert many entries
    // const docs = [
    //   { _id: 8, name: 'Grapes', review: 'Best'},
    //   { _id: 9, name: 'Watermelon', review: 'Hydration'},
    //   { _id: 10, name: 'Strawberry', review: 'Good', color: 'Red'}
    // ]
    // const insertManyResult = await products.insertMany(docs);
    // const ids = insertManyResult.insertedIds;
    // console.log(`${insertManyResult.insertedCount} document were inserted`);
    // for (const id of Object.values(ids)){
    //   console.log(`Inserted a document with _id ${id}`);
    // }


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

