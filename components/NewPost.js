import Image from "next/image";
import React from "react";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
const NewPost = () => {
  return (
    <div>
      <div className="bg-white   mx-auto w-full max-w-[25rem]  rounded-[0.6rem] py-3 px-2  sm:max-w-[30rem] md:max-w-[34rem] mt-4 ">
        <div className="flex mx-2 mt-2">
          <div className="w-10 h-10 mr-4 shrink-0">
            <Image src={guy} className="rounded-full  " />
          </div>
          <input
            type="text"
            className="bg-[#f2f3f7] rounded-full w-full px-5  truncate outline-0 "
            placeholder="What's on your mind, Jon Doe ?"
          />
        </div>
        <div className="w-full border-t my-4"></div>

        <div className=""></div>

        <div className="flex justify-center space-x-2 sm:space-x-10 mb-2">
          <div className="flex items-center">
            <div className=" w-5 h-5">
              <Image src={camera} />
            </div>
            <p className="pl-2 whitespace-nowrap">Live Video</p>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5">
              <Image src={photos} />
            </div>
            <p className="pl-2">Photo/Video</p>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5">
              <Image src={smile} />
            </div>
            <p className="pl-2">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
