
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-12">Contact</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="mb-8 text-foreground/70">
            Whether you want to discuss a project, ask a question, or just say hi, I'd love to hear from you. Connect with me through any of these platforms:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:hello@example.com" className="text-foreground/80 hover:text-primary transition-colors">
                hello@example.com
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Github className="w-5 h-5 text-primary" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                github.com/yourusername
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Linkedin className="w-5 h-5 text-primary" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                linkedin.com/in/yourusername
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Twitter className="w-5 h-5 text-primary" />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                @yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
