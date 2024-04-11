import React from 'react'
import Navbar from '../components/Navbar'
import Mingle from '../components/Mingle'
import Button from '../components/Button'
const page = () => {
  return (
    <>
      <Navbar />
      <Mingle />
      <img
        className="w-screen h-screen brightness-50"
        src="https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/Best-Movie-Posters-All-Time.jpg?fit=1280%2C640&ssl=1"
        alt="poster"
      ></img>
      <div className="font-serif font-bold p-4 w-96 flex flex-col gap-4 items-center justify-center text-center text-orange-600 bg-black border-2 border-solid border-orange-600 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[1%]">
        <h1>Get Ready to Mingle</h1>
        <p className="text-center">
          Check out the posts of other users as well as create your own posts
          for others to see
        </p>
        <Button>
          <a href="/mingle/feed">Check The Feed</a>
        </Button>
      </div>
    </>
  );
}

export default page
