import Image from "next/image";
import profilepic from "/public/images/profile/developer-pic-1.png"

export default function Home() {
  return (
    <main className="text-dark">
      <div className="flex items-center justify-between w-full h-screen">
        <div>
          <Image src={profilepic} alt="logo" width={100} height={100}/>
        </div>
      </div>
    </main>
  );
}
