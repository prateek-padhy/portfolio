const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>

        <div className="mt-10 mb-8">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-6">
              I am a Frontend Engineer with 9+ years of experience. Skilled in
              React, Angular, TypeScript, and Node.js.
            </p>

            <p className="text-lg mb-6">
              I specialize in building clean, large-scale, user-friendly websites and web applications. I also have a strong understanding of backend technologies. 
              I have a strong track record of building scalable, cloud-ready solutions and integrating with REST APIs.
            </p>

            <p className="text-lg">
              I love exploring new technologies, solving development challenges. 
              When I'm not coding, I'm Swimming 🏊‍♂️, Cycling 🚴‍♂️, or Hiking 🌄.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">Frontend:</p>
            <p className="mb-4">
              React, Angular, TypeScript, Next.js, JavaScript (ES6+), HTML5, Bootstrap, Tailwind, Material-UI, Emotion
            </p>

            <p className="text-lg font-medium">Architecture & Build:</p>
            <p className="mb-4">Nx, Module Federation, Vite, Webpack, CRACO</p>

            <p className="text-lg font-medium">Data & State:</p>
            <p className="mb-4">React Query, Redux, RxJs, NxJs</p>

            <p className="text-lg font-medium">Testing & Qality:</p>
            <p className="mb-4">Jest, React Testing Library, Cypress, EsLint, Prettier</p>

            <p className="text-lg font-medium">Backend & API:</p>
            <p className="mb-4">Node.js, Java, RESTful APIs, GraphQL</p>

            <p className="text-lg font-medium">CI/CD & DevOps:</p>
            <p className="mb-4">GitHub Actions, Azure DevOps, Docker, Kubernetes</p>

            <p className="text-lg font-medium">Tools & Others:</p>
            <p>Git, Webpack, Docker, Firebase, AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
