import express,{Request,Response} from 'express';
import { User } from '../models/User';
import { validate } from 'class-validator'
import {saveToDatabase,getAllDocuments} from "../services/database"


const router = express.Router();
router.get('/', (req, res) => {
    res.send("user")
})
router.post('/register',[], async (req: Request, res: Response)=>{
    const { email, username, password } = req.body

  try {
    // TODO: Validate data
    let errors: any = {}
    const emailUser = await User.findOne({ email })
    const usernameUser = await User.findOne({ username })

    if (emailUser) errors.email = 'Email is already taken'
    if (usernameUser) errors.username = 'Username is already taken'

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors)
    }

    // TODO: Create the user
    const user = new User({ email, username, password })

    errors = await validate(user)
    if (errors.length > 0) return res.status(400).json({ errors })

    await user.save()

    // TODO: Return the user
    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})



export {router as user}