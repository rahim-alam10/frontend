'use client'
import Link from "next/link"
import courseData from "../data/courses.json"
import { FocusCards } from "./ui/focus-cards"

interface Course{
    id: number,
    title: string,
    image: string
}

function FeaturedCourses() {
    const cards = courseData.courses.map((course: Course) => ({
        title: course.title,
        src: course.image
    }))

    return (
        
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Why StudyVault?</p>
                    <p className="mt-15 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Built specifically for the rigorous demands of the Pakistani educational system, providing you with the exact tools needed to succeed.</p>
                </div>
            </div>
            <div className="mt-20 mx-8">
                <p className=" text-center mt-6 mb-17 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Available University Materials</p>
                <FocusCards cards={cards} />
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses