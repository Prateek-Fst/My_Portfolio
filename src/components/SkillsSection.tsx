
import { useState, useEffect, useRef } from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "Java", "HTML", "CSS", "NodeJs", "Python", "MongoDB", "MySQL"]
  },
  {
    category: "Frameworks",
    skills: ["Bootstrap", "Express.js", "Next.js"]
  },
  {
    category: "Libraries",
    skills: ["React", "Tailwind CSS", "MUI"]
  },
  {
    category: "Tech Tools",
    skills: ["VS Code", "Figma", "Jira", "Github", "Bitbucket", "Gitlab"]
  }
];

const SkillPill = ({ skill, isVisible, index }: { skill: string; isVisible: boolean; index: number }) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-theme-purple hover:text-white ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {skill}
    </div>
  );
};

const SkillsSection = () => {
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
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, catIndex) => (
            <div 
              key={category.category}
              className={`glass-card p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-theme-purple">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill 
                    key={skill} 
                    skill={skill} 
                    isVisible={isVisible}
                    index={catIndex * 8 + skillIndex + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
