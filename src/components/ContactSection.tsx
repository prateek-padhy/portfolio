const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>

        <div className="mt-10 mb-12">
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-lg mb-6">
              Feel free to reach out to me via email or connect with me on
              social media.
            </p>
          </div>

          <div>
            <div className="flex space-x-8">
              <a href="https://github.com/prateek-padhy" className="text-lg hover:underline">
                Github
              </a>
              <a href="https://www.linkedin.com/in/prateek-padhy-356592a6/" className="text-lg hover:underline">
                LinkedIn
              </a>
              <a href="mailto:prateek1padhy@gmail.com" className="text-lg hover:underline">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
