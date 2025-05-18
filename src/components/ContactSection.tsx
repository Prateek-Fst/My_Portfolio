
import { useState, useEffect, useRef, FormEvent } from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
      });
  };


  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className={`${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">choudharyprateek131@gmail.com</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+91 9258151068</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Gurugram, Haryana, India</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium text-gray-800 dark:text-white mb-3">Find me on</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Prateek-Fst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/prateek-choudhary-317422292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://prateek-portfolio12.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-theme-purple hover:text-white transition-all duration-300"
                    aria-label="Portfolio"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-purple"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-purple"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-purple resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-theme-purple text-white font-medium rounded-md hover:bg-theme-indigo transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
