// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <Image
      src={'/avatar.png'}
      width={418}
      height={620}
      alt=""
      className="translate-z-0 w-full h-full z-auto"
    />
  </div>;
};

export default Avatar;
