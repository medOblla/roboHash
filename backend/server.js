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
    require("dotenv").config();
    var app = express();
    const path = require("path");
    var bodyParser = require("body-parser");
    app.use(express.static("client"));
    app.use(cors());
    app.use(bodyParser.json());

    var port = process.env.PORT || 5000;

    // start the server
    app.listen(port, function () {
      console.log(`app started on port : ${port}`);
    });

    // route our app
    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + "/../client/index.html"));
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
