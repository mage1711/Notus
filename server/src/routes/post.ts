import express, { Request, Response } from 'express';
import Post from '../models/Post';
import Sub from "../models/Sub";
import authentication from "../services/authentication"
import Comment from '../models/Comment';
import loggedIn from "../services/loggedIn"
import { uploadCloud } from "../services/cloudinary"

const router = express.Router();
router.get('/', loggedIn, async (_: Request, res: Response) => {
  try {
    const posts = await Post.find({
      order: { createdAt: 'DESC' },
      relations: ['comments', 'votes', 'sub', 'user'],
    })

    if (res.locals.user) {
      posts.forEach((p) => p.setUserVote(res.locals.user))
    }

    return res.json(posts)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
router.get('/:identifier/:slug', [], async (req: Request, res: Response) => {
  const { identifier, slug } = req.params
  try {
    const post = await Post.findOneOrFail(
      { identifier, slug },
      { relations: ['sub'] }
    )

    return res.json(post)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ error: 'Post not found' })
  }
})

router.post('/', authentication, async (req: Request, res: Response) => {
  const { title, body, sub } = req.body

  const user = res.locals.user

  if (title.trim() === '') {
    return res.status(400).json({ title: 'Title must not be empty' })
  }

  try {
    // find sub
    const subRecord = await Sub.findOneOrFail({ name: sub })

    const post = new Post({ title, body, user, sub: subRecord })
    await post.save()

    return res.json(post)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

router.get('/:identifier/:slug/comments', authentication, async (req: Request, res: Response) => {
  const { identifier, slug } = req.params
  const body = req.body.body

  try {
    const post = await Post.findOneOrFail({ identifier, slug })

    const comment = new Comment({
      body,
      user: res.locals.user,
      post,
    })

    await comment.save()

    return res.json(comment)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ error: 'Post not found' })
  }
})
router.post('/upload', uploadCloud.single('image'), async (req: Request, res: Response) => {
  res.json(req.file);
})



export { router as post }