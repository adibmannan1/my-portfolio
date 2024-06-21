import Image from "next/image"
import Link from "next/link"

const Hireme = () => {
  return (
    <div className="absolute right-0 bottom-4 hidden lg:flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center relative">
            <Image src="/images/text.png" alt="" width={120} height={120} className="animate-spin-slow"/>
            <Link className="flex items-center justify-center text-light font-bold uppercase tracking-[2px] transition ease-in-out absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center bg-dark border-dark border-[3px] text-sm p-[13px] rounded-full hover:bg-transparent hover:text-light" href="mailto:adibmannan1@gmail.com" target="_blank" onClick={e => {
              alert("If this did not open gmail, install Mailto extension or  please manually email me at adibmannan1@gmail.com")
              }}>Hire Me</Link>
        </div>
    </div>
  )
}

export default Hireme