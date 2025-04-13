
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A responsive e-commerce website built with React and Redux, featuring product listings, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A dynamic single-page application for managing tasks, built with Vue.js and Firebase, with real-time updates and drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a0?q=80&w=1000',
      tags: ['Vue.js', 'Firebase', 'CSS3', 'JavaScript'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'An interactive portfolio site with scroll-triggered animations and transitions, showcasing creative design principles and smooth interactions.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000',
      tags: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>
        
        <div className="mt-10 mb-12">
          <div className="section-number">02</div>
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="aspect-square bg-gray-100 border border-border overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="mb-4 text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm bg-secondary py-1 px-3">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.liveLink} className="text-sm underline">
                    View Project
                  </a>
                  <a href={project.codeLink} className="text-sm underline">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
