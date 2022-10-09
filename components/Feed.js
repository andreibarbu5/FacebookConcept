import React from "react";
import LeftSide from "./LeftSide";
import NewPost from "./NewPost";
import Post from "./Post";
import Posts from "./Post";
import RightSide from "./RightSide";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex bg-[#f2f3f7] h-auto ">
      {/* Left Sidebar */}
      <div className="hidden sm:block">
        <LeftSide />
      </div>
      <div className="w-full">
        {/* Stories */}
        <Stories />
        {/* New Post */}
        <NewPost />
        {/* Posts */}
        <Post />
        <Post />
      </div>

      {/* Right Sidebar */}
      <RightSide />
    </div>
  );
};

export default Feed;
