
import { User, GraduationCap, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`glass-card p-6 ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <User className="h-6 w-6 text-theme-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Prateek Mander</li>
                <li>Gurugram, Haryana</li>
                <li>choudharyprateek131@gmail.com</li>
                <li>+91 9258151068</li>
              </ul>
            </div>
          </div>
          
          <div className={`glass-card p-6 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <GraduationCap className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li>
                  <p className="font-medium">B.Tech in Computer Science (AI & ML)</p>
                  <p>Polaris School of Technology, Starex University</p>
                  <p className="text-sm">CGPA: 8.6 / 10.0</p>
                </li>
                <li>
                  <p className="font-medium">Intermediate</p>
                  <p>ASM Modern Academy, Amroha, U.P.</p>
                  <p className="text-sm">Percentage: 93.6 / 100</p>
                </li>
                <li>
                  <p className="font-medium">High School</p>
                  <p>ASM Modern Academy, Amroha, U.P.</p>
                  <p className="text-sm">Percentage: 98 / 100</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`glass-card p-6 ${isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-theme-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <p className="font-medium">Open Source Leadership</p>
                  <p className="text-sm">Contributed to GSoC organizations like P5.js Organisation, P5.js Web-Editor, P5.jsOrg</p>
                </li>
                <li>
                  <p className="font-medium">Problem Solving</p>
                  <p className="text-sm">Solved 147+ LeetCode problems and 150+ Codewars challenges</p>
                </li>
                <li>
                  <p className="font-medium">Academic Excellence</p>
                  <p className="text-sm">Earned distinctions in 10th (98%) and 12th (93.6%) board examinations</p>
                </li>
                <li>
                  <p className="font-medium">Leadership</p>
                  <p className="text-sm">Facilitated team collaboration and communication at college level</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
