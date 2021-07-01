import PostPreview from "../Components/PostPreview"
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Post } from '../types'
import Axios from 'axios'
import useSWR from 'swr'

export default function Home() {
  const { data: posts } = useSWR('/post')
  return (
    <div className="pt-12">
      <Head>
        <title>NOTUS</title>
      </Head>
      <div className="container flex pt-4">
        {/* Posts feed */}
        <div className="w-160">
          {posts?.map((post) => (

            <PostPreview post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
      </div>
    </div>
  )
}
