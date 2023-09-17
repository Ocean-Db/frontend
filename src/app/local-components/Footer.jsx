import Image from "next/image";
import Link from "next/link";

const linkData = ["About", "Usecase", "Docs", "Login/signup", "Contact"];

const Footer = () => {
  return (
    <div className="bg-black p-3">
      <div className="md:flex justify-between">
        <div>
          <Image classname="fill-white" src="/logo.png" width={100} height={100} />
        </div>

        <div className="grid md:flex justify-center text-center">
          {linkData.map((link) => (
            <Link className="text-blue-500 p-1 my-2 md:mx-2 text-lg font-medium md:text-sm" href="#">
              {link}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-white text-center mt-[2rem] mb-2">
        <p className="text-xs opacity-40">Copyright @ 2023 OceanDB</p>
      </div>
    </div>
  );
};

export default Footer;
