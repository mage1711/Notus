import mongoose from "mongoose";
import config from "./config"
import {UserModel} from "../models/User"
mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Notus" });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;

export const saveToDatabase = (model) => {
    model.save(function (error, document) {
      if (error) console.error(error);
      console.log(document);
    });
    console.log(model)
  };
  export const getAllDocuments = async (model) => {
    var results = await model.find({}, function (err, documents) {
      var documentMap = {};
      documents.forEach(function (document) {
        documentMap[document._id] = document;
      });
      return documentMap;
    });
    return results;
  };
  export const getDocument = async (model, id) => {
    var results = await model.find({ _id: id }, function (err, documents) {
      var documentMap = {};
      documents.forEach(function (document) {
        documentMap[document._id] = document;
      });
      return documentMap;
    });
    return results;
  };