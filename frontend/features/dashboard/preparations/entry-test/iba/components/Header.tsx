import Image from 'next/image'

export default function IBAHeader() {
  return (
    <div className="relative my-1 flex min-h-40 items-center justify-center">

      {/* Logo */}
      <div className="absolute left-0 flex-shrink-0">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0j2tkvFxqvMtK3zACU3tlLIRrta_gmBrGFBbRPNSUqA&s=10"
          alt="IBA Logo"
          width={300}
          height={300}
          className="h-28 w-28 rounded-2xl object-contain sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-50"
          priority
          unoptimized
        />
      </div>

      {/* Title and Subtitle */}
      <div className="px-4 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
          IBA Entry Test
        </h1>

        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm md:text-base lg:text-lg">
          Access full-length past papers, chapter-wise questions, and preparation
          guides for all IBA admission tests.
        </p>
      </div>

    </div>
  )
}