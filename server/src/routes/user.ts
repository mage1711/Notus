import express,{Request,Response} from 'express';

import {saveToDatabase,getAllDocuments} from "../services/database"
import {UserModel} from "../models/User"

const router = express.Router();
router.get('/api/user',[], async (req: Request, res: Response)=>{
    return res.send(await getAllDocuments(UserModel))
})
router.post('/api/user',[],(req: Request, res: Response)=>{

        const user = new UserModel({
            name:"test"
        })
      saveToDatabase(user);
    return res.send('user created')
})



export {router as user}