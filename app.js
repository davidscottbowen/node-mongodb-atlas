const MongoClient = require('mongodb').MongoClient;
const uri = "#####";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("datainfo").collection("books");
  console.log("Connected");
  var ins={name:'Mark',email:'mark@nomail.com'};

  collection.insertOne(ins,function(err,res){
    console.log("data inserted");
  });
  client.close();
});