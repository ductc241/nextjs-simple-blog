import Image from "next/image";
import PostAction from "./PostAction";

const PostCard = () => {
  return (
    <div className="flex justify-start items-start gap-5 p-5 bg-white">
      <Image
        src="https://placehold.co/50x50/png"
        className="rounded-full"
        width={50}
        height={50}
        alt="user avatar"
      />
      <div>
        <p className="text-sm">Bogdan Bendziukov</p>
        <p className="text-xs">Jun 18</p>
        <p className="pr-8 mt-3 text-xl font-semibold">
          Lorem ipsum dolo sit amet cotetur adipisi elitsit amet cot.
        </p>

        <PostAction />
      </div>
    </div>
  );
};

export default PostCard;
