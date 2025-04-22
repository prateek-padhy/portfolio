const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>

        <div className="mt-10 mb-8">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-6">
              I'm a frontend developer with 9 years of experience. Skilled in
              JavaScript, React, and Node.js.
            </p>

            <p className="text-lg mb-6">
              I specialize in building clean, user-friendly websites and web
              applications, while also having a strong understanding of backend
              technologies.
            </p>

            <p className="text-lg">
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source projects, or solving development challenges.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium mb-4">Frontend:</p>
            <p className="mb-8">
              HTML, CSS, JavaScript, React, Angular, SASS, TypeScript
            </p>

            <p className="text-lg font-medium mb-4">Backend:</p>
            <p className="mb-8">Node.js, Express, MongoDB, PHP, SQL</p>

            <p className="text-lg font-medium mb-4">Tools & Others:</p>
            <p>Git, Webpack, Docker, Firebase, AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
