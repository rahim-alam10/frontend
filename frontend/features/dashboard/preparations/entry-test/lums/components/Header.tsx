import Image from 'next/image'

export default function LUMSHeader() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center">
      {/* Logo - Left Side (centered on mobile) */}
      <div className="flex-shrink-0 pl-15">
        <Image
          src="https://www.jobs.ac.uk/images/employer-logos/medium/3888.gif?1669899533"
          alt="LUMS Logo"
          width={180}
          height={180}
          className="h-24 w-24 rounded-2xl object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40"
          priority
          unoptimized
        />
      </div>
      
      {/* Title and Subtitle - Centered */}
      <div className="flex-1 text-center sm:text-left md:text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
          LUMS (LCAT & SAT) Resourses
        </h1>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm md:text-base lg:text-lg">
          Complete test preparation for LUMS admissions (LCAT & SAT)
        </p>
      </div>
    </div>
  )
}