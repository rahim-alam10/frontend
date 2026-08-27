import Image from 'next/image'

export default function FASTHeader() {
  return (
    <div className="relative my-1 flex min-h-40 items-center justify-center">

      {/* Logo */}
      <div className="absolute left-9 flex-shrink-0">
        <Image
          src="https://nu.edu.pk/Content/images/NU-logo.jpg"
          alt="FAST NU Logo"
          width={250}
          height={250}
          className="h-28 w-28 rounded-2xl object-contain sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-60"
          priority
          unoptimized
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
          FAST NU Test Resources
        </h1>

        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm md:text-base lg:text-lg">
          Start Your Journey With Our NU Resources
        </p>
      </div>

    </div>
  )
}