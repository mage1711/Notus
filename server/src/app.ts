import express from 'express';
import config from "./services/config"
import {user} from './routes/user' ;
import mongoose from 'mongoose';
import db from "./services/Database"
const app = express();
var port = (config.PORT || "8000");
app.set("port", port);
app.use(user);
app.get('/', (req, res) => res.send('Express'));

app.listen(port, () => {

  console.log(`Server is running at http://localhost:${port}`);
});