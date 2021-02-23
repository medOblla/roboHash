//const app = express();

const connectionString =
  "mongodb+srv://moha:zlatan@clustern0.ukmpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    // ...
    const db = client.db("robots");

    var express = require("express");
    const cors = require("cors");
    var app = express();
    var bodyParser = require("body-parser");
    app.use(express.static("client"));
    app.use(cors());
    app.use(bodyParser.json());

    var port = 5000;

    // start the server
    app.listen(port, function () {
      console.log(`app started on port : ${port}`);
    });

    app.get("/mongoRobots", function (req, res) {
      db.collection("robots")
        .find()
        .toArray((err, items) => {
          res.send(items);
        });
    });
  })
  .catch(console.error);
