import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            {/* <Image
              src="/logo.png"
              width={50}
              height={40}
              alt="Picture of the author"
            /> */}
            <p className="mt-3">
              A constructive and inclusive social network for software
              developers.
            </p>
          </div>
          <p className="mt-auto">© 2023 Dev Blog. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
