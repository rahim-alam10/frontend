import Image from 'next/image'

export default function NUSTHeader() {
  return (
    <div className="flex flex-col items-center gap-4 my-1 sm:flex-row sm:items-center  md:flex-row md:items-center">
      {/* Logo - Left Side (centered on mobile) */}
      <div className="flex-shrink-0">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-YYnMrkp5vypUhG_44F1cBKO_-qSQGNOg09WFApd3HQPFdvVVEonTL8&s=10"
          alt="NUST Logo"
          width={200}
          height={200}
          className="h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 ml-14"
          priority
          unoptimized
        />
      </div>
      
      {/* Title and Subtitle - Centered */}
      <div className="flex-1 text-center sm:text-left md:text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
          NUST Entry Test (NET) Resources
        </h1>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm md:text-base lg:text-lg">
          Access full-length past papers, chapter-wise questions, and preparation guides for all NET series.
        </p>
      </div>
    </div>
  )
}