import Image from "next/image";
import heroBanner from "@/public/hero-banner.jpg";

function Hero() {
  return (
    <div className="relative h-[40vh] w-full">
      {/* Background Image */}
      <Image
        src={heroBanner}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30" />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Text on Top */}
      <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center items-start">
        <h1 className="text-3xl text-white font-bold transition-all duration-300 ease-in-out hover:translate-y-[-4px]">
          Unlock Your Potential 🎉🎇
        </h1>
        <p className="text-lg text-white/80 mt-2 transition-all duration-300 ease-in-out hover:translate-y-[-4px]">
          Your path to mastering skills.
        </p>
        <p className="mt-4 bg-primary text-white dark:text-black px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:translate-y-[-4px]">
          Enroll Now!
        </p>
      </div>
    </div>
  );
}

export default Hero;
