import Image from "next/image";


const HeroFoot = () => {
  return (
    <div className="flex justify-center relative">
        <div className="flex p-3 bg-white mt-[-50px] md:mt-[-30px] w-[85%] relative justify-center">
            <div><Image width={300} height={50} src="/magnifier.png" className="p-3" /></div>
            <div><Image width={200} height={50} src="/databaseAdmin.png" className="p-3" /></div>
            <div><Image width={300} height={50} src="/dataEntry.png" className="p-3" /></div>
        </div>
    </div>
  )
}

export default HeroFoot;
