import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image */}
      <Image
        src="/hero-banner.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text on Top */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8">
        <h1 className="text-3xl text-white font-bold">
          Unlock Your Potential 🎉🎇
        </h1>
        <p className="text-lg text-white/80 mt-2">
          Your path to mastering skills.
        </p>
        <Link
          href="/courses"
          className="mt-4 bg-primary text-white dark:text-black px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:translate-y-[-4px]"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
