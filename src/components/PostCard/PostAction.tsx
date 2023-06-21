"use client";

import ChatIcon from "@/icons/ChatIcon";
import TagIcon from "@/icons/TagIcon";
import Link from "next/link";

const PostAction = () => {
  const handleClick = () => {
    console.log("save post");
  };

  return (
    <div className="flex justify-between items-center mt-5">
      <Link href={""} className="group flex items-center gap-1">
        <ChatIcon />
        <span className="text-sm group-hover:text-indigo-500">Add comment</span>
      </Link>
      <TagIcon className="hover:cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default PostAction;
