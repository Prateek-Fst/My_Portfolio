
import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string[];
  duration: string;
  tech: string;
  githubLink: string;
  liveLink?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Virtual Hackathon Project",
    description: [
      "Developed a platform enabling administrators to organize virtual hackathons with registration and creation features.",
      "This project includes proper authentication and authorization."
    ],
    duration: "Nov. 2024 - Dec. 2024",
    tech: "MERN Stack",
    githubLink: "https://github.com/Prateek-Fst/HackMeet",
    liveLink: "https://hack-meet-lvhw-f71rrverk-prateek-fsts-projects.vercel.app/"
  },
  {
    title: "Hospital Appointment Management System",
    description: [
      "Built a secure Fullstack application using MERN with two interfaces for User (patient) and doctor (Hospitals).",
      "User can book the appointment in the nearest possible hospital on the basis of its location."
    ],
    duration: "Dec. 2024 - Dec. 2024",
    tech: "MERN Stack",
    githubLink: "https://github.com/Prateek-Fst/Hospital-Appointment-Management-System",
    liveLink: "https://hospital-appointment-management-system.vercel.app/"
  },
  {
    title: "E-Commerce MERN Website",
    description: [
      "Full-Stack Ecommerce Platform with Role-Based Functionality.",
      "Authentication System with OTP and Secure Token Handling."
    ],
    duration: "Jan. 2025 - Jan. 2025",
    tech: "NodeJs, ReactJs, MongoDB, ExpressJs",
    githubLink: "https://github.com/Prateek-Fst/E-Commerce_Website",
    liveLink: "https://e-commerce-website-t7yn.vercel.app/login"
  },
  {
    title: "Student Database Management System",
    description: [
      "Designed a Java-based system to manage student records, supporting search, add, view, and list functionalities.",
      "Streamlined student information management for administrative efficiency."
    ],
    duration: "Dec. 2023 - Dec. 2023",
    tech: "Java",
    githubLink: "https://github.com/Prateek-Fst/StudentDatabaseSystem"
  }
];

const ProjectCard = ({ project, isVisible, index }: { project: ProjectProps; isVisible: boolean; index: number }) => {
  return (
    <div 
      className={`glass-card group hover:shadow-xl transition-all duration-500 overflow-hidden ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Card header with gradient */}
      <div className="h-3 bg-gradient-to-r from-theme-purple via-theme-indigo to-theme-blue"></div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex space-x-2">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-theme-purple dark:text-gray-300 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-theme-purple dark:text-gray-300 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>{project.duration}</span>
        </div>
        
        <div className="mb-4">
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-theme-purple">{project.tech}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
