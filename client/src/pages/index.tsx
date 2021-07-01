import PostPreview from "../components/PostPreview"
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Post } from '../types'
import Axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    Axios.get('/post')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="pt-12">
    <Head>
      <title>readit: the front page of the internet</title>
    </Head>
    <div className="container flex pt-4">
      {/* Posts feed */}
      <div className="w-160">
        {posts.map((post) => (

<PostPreview post={post} key ={post.identifier} />
        ))}
      </div>
      {/* Sidebar */}
    </div>
  </div>
)
}
