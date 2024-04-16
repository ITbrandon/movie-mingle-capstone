import React from 'react';
import Feed from '../../components/Feed';
import { getPosts } from '../../actions/post';
export default async function feed(){
const posts = await getPosts();
 return (
  <>
  <Feed posts={posts}/>
  </>
 )
}

