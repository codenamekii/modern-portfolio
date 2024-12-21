// link
import Link from "next/link";

// icons
import { RiInstagramLine, RiTwitterLine, RiFacebookLine, RiGithubLine, RiLinkedinLine, RiLinkedinBoxFill, RiGithubFill, RiFacebookBoxFill } from "react-icons/ri";


const Socials = () => {
  return (
    <div className="flex items-center gap-5 text-lg bottom-4 top-0 ">
      <Link href={'https://www.instagram.com/callmefiki/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://x.com/kii_fiki'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.facebook.com/final.kidd.9'} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxFill />
      </Link>
      <Link href={'https://github.com/codenamekii'} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={'https://www.linkedin.com/in/fiki-taufiqurrahman-583338188/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
