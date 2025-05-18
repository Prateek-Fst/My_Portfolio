
import { Github, Linkedin, ExternalLink, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Hi, I'm <span className="gradient-text">Prateek Mander</span>
          </h1>
          
          <h2 className="animate-fade-in animate-delay-200 text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-8">
            Software Engineer & Frontend Developer
          </h2>
          
          <p className="animate-fade-in animate-delay-300 max-w-2xl text-gray-600 dark:text-gray-400 mb-10 text-lg">
            From Gurugram, passionate about building beautiful and functional web applications.
            Experience with MERN stack and modern frontend frameworks.
          </p>
          
          <div className="animate-fade-in animate-delay-400 flex space-x-4 mb-12">
            <a
              href="https://github.com/Prateek-Fst"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/prateek-choudhary-317422292/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/Prateek2109/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
              aria-label="Portfolio"
            >
              <ExternalLink size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-fade-in animate-delay-500 flex items-center space-x-2 py-3 px-6 rounded-full bg-theme-purple text-white hover:bg-theme-indigo transition-all duration-300"
          >
            <span>Learn More</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
