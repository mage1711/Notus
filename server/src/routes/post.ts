import express,{Request,Response} from 'express';

import {saveToDatabase,getAllDocuments} from "../services/database"
import {PostModel} from "../models/Post"
import {UserModel} from "../models/User"

const router = express.Router();
router.get('/api/post',[], async (req: Request, res: Response)=>{
    return res.send(await getAllDocuments(PostModel))
})
router.post('/api/post',[],async(req: Request, res: Response)=>{
    var user = (await getAllDocuments(UserModel))[0]
    // const user = new UserModel({
    //     name:"ahmed"
    // })
        const post = new PostModel({
            title:"test title",
            poster: user
        })
      saveToDatabase(post);
    return res.send('post created')
})



export {router as post}