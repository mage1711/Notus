import express from 'express';
import { createConnection } from 'typeorm'
import config from "./services/config";
import morgan from 'morgan'
import trim from './services/trim'
import {user} from './routes/user' ;
import {post} from  './routes/post';
const app = express();
var port = (config.PORT || "8000");
app.set("port", port);
app.use(express.json())
app.use(morgan('dev'))
app.use(trim)
app.get('/', (_, res) => res.send('Hello World'))
app.use('/api/user', user)

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`)

  try {
    await createConnection()
    console.log('Database connected!')
  } catch (err) {
    console.log(err)
  }
})