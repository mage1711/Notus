import mongoose from "mongoose";
import config from "../config/config"
import User from "../models/User";
import List from "../models/List";

mongoose.connect(config.databaseURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const user = new User({
//   name: "test",
//   email: "testdsad",
// });
// user.save(function (error, document) {
//   if (error) console.error(error);
//   console.log(document);
// });
// const list = new List({
//   name: "test", 
//   todo: {
//     name: "test todo",
//   },
// });
// list.save(function (error, document) {
//   if (error) console.error(error);
//   console.log(document);
// });
export const saveToDatabase = (model) => {
  model.save(function (error, document) {
    if (error) console.error(error);
    console.log(document);
  });
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

// async function test() {
//   var rs = await getAllDocuments(List);
//   console.log(rs);
// }
// async function test2() {
//   var x = "601deb7e40bd4a4c20751cb5";
//   var rs = await getDocument(List, x);
//   console.log(rs);
// }
