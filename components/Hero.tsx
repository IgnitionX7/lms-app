function Hero() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image */}
      <img
        src="/hero-banner.jpg"
        alt="Background"
        className="h-full w-full object-cover"
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
        <button className="mt-4 bg-primary text-white dark:text-black px-4 py-2 rounded-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
export default Hero;
