import Image from "next/image";

const { Button } = require("@/components/ui/button");

const Hero = () => {
  return (
    <div className="md:flex md:mx-20">
      <div className="p-5 md:my-10 md:w-[55%]">
        <h1 className="p-2 text-[1.8rem] md:text-[3rem] font-semibold">
          Cross-Platfrom <br />
          <span className="text-blue-500">Database</span> <br />
          Management &<br /> Excel Integration
        </h1>
        <p className="p-2 md:my-2 md:w-[90%]">
          Experience unified database connectivity across diverse platform with
          our user-friendly web app. Seamlessly connect to Amazon, MySQL,
          MongoDB and Google Cloud servers, enjoying efficient data management
          all from one interface
        </p>
        <Button className="bg-blue-500 text-white p-2 hover:bg-blue-400 w-[70%] md:w-[50%] rounded-[5px]">
          Connect Database
        </Button>
      </div>

      <div className="flex align-bottom md:w-[45%]">
        <Image
          src="/svg.png"
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
          className=""
          alt="svg"
        />
      </div>
    </div>
  );
};

export default Hero;
