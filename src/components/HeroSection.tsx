
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 md:mb-0 max-w-2xl">
            I build robust and scalable web applications.
          </h1>
          
          <div className="text-right hidden md:block">
            <span className="font-serif italic text-lg opacity-75">Frontend Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
