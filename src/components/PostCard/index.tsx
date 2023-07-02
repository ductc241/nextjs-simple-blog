import Image from "next/image";
import PostAction from "./PostAction";
import Link from "next/link";

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
        <Link
          href="/"
          className="block pr-8 mt-3 text-lg xl:text-2xl font-bold hover:text-blue-900"
        >
          Lorem ipsum dolo sit amet cotetur adipisi elitsit amet cot.
        </Link>

        <PostAction />
      </div>
    </div>
  );
};

export default PostCard;
