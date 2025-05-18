
import { BriefcaseBusiness, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceProps[] = [
  {
    company: "Bossocder Academy",
    position: "Software Engineer Intern",
    duration: "July 2024 - October 2024",
    location: "Noida, India",
    bullets: [
      "Collaborated with a 20-member team to optimize MERN stack codebase, improving performance and scalability.",
      "Enhanced teaching platform by integrating features such as automated email and SMS notifications."
    ]
  },
  {
    company: "CollegeDekho",
    position: "Frontend Developer Intern",
    duration: "May 2024 - July 2024",
    location: "Gurugram, India",
    bullets: [
      "Worked in an 8-person team to design and develop responsive websites for college clients.",
      "Strengthened frontend development skills, delivering user-friendly web pages tailored to client needs."
    ]
  },
  {
    company: "Summer of Bitcoin",
    position: "Open Source Contribution",
    duration: "February 2024 - April 2024",
    location: "Remote",
    bullets: [
      "Learned Bitcoin transaction broadcasting, wallet types, and blockchain technology applications in mining.",
      "Successfully completed technical assessments during Bitcoin's recruitment bootcamp."
    ]
  }
];

const ExperienceCard = ({ experience, isVisible, delay }: { experience: ExperienceProps; isVisible: boolean; delay: number }) => {
  return (
    <div 
      className={`glass-card p-6 ${isVisible ? `animate-fade-in animate-delay-${delay}00` : 'opacity-0'}`}
    >
      <div className="flex items-start">
        <div className="hidden sm:flex h-12 w-12 rounded-full bg-theme-purple/10 text-theme-purple items-center justify-center shrink-0 mr-4">
          <BriefcaseBusiness size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.position}</h3>
          <p className="text-theme-purple font-medium">{experience.company}</p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
            <Calendar size={16} className="mr-1" />
            <span>{experience.duration} | {experience.location}</span>
          </div>
          
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {experience.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-theme-purple via-theme-indigo to-theme-blue"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp} 
              isVisible={isVisible} 
              delay={(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
