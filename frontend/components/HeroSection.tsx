import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto bg-black">            
        <Spotlight 
                className="absolute inset-0 w-full h-full z-0" 
                fill="white" 
            />
            <div className="p-4 relative z-10 w-full text-center" >
                <h1 className="mt-30 md:mt-30 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Welcome to the Future of Preparation
                </h1>
                <p className="mt-15 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    The all-in-one vault for Pakistani students aiming for top universities and scholarships
                    Master your board exams and entry tests with structured, premium resources
                </p>
                <div className="mt-24 ">
                    <Link href={"/signup"} className="mr-10">
                        <Button
                            borderRadius="1.75rem"
                            className=" text-xl cursor-pointer"
                        >
                            Sign Up
                        </Button>
                    </Link>
                    <Link href={"/signin"}>
                        <Button
                            borderRadius="1.75rem"
                            className=" text-xl cursor-pointer"
                        >
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection