import React from 'react'
import Navbar from '../../components/Navbar';
import Mingle from '../../components/Mingle';
import Button from '../../components/Button';
import { createPost } from '../../actions/post';
export default async function create() {
const newPost = await createPost();
  return (
    <>
      <Navbar />
      <Mingle />
      <form className='text-center mt-6'>
            <div class="mb-4">
                <label for="title" class="block text-orange-600 font-semibold mb-2">Title</label>
                <input type="text" id="title"/>
            </div>
            <div class="mb-4">
                <label for="content" class="block text-orange-600 font-semibold mb-2">Content</label>
                <textarea id="content" rows="8"></textarea>
            </div>
            <Button type="submit" class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-800">Submit</Button>
        </form>
    </>
  );
}

