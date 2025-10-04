import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

// ========================
// Hero Section
// ========================
function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Farhan R</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg mb-6 max-w-xl"
      >
        Front-End Developer | Building complex and scalable web and mobile applications using React and React Native.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex gap-4"
      >
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" download="Farhan_Resume_Software_Developer.pdf">Download Resume</a>
        </Button>
      </motion.div>
    </section>
  );
}

// ========================
// Projects Section
// ========================
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie App (IMDB Without Money)",
      description: "A React-based movie discovery application where users can search for movies, manage a favorites list, and explore popular movies using data from TMDb API. Features responsive design and persistent favorites storage.",
      techStack: "React, React Router v6, Tailwind CSS, TMDb API",
      liveDemo: "https://imdbwithoutmoney.vercel.app",
      github: "https://github.com/Mceater/Movie_App"
    },
    {
      id: 2,
      title: "Memoirs",
      description: "Image uploading app built using React Native. A mobile application that allows users to upload and manage images with a clean, intuitive interface.",
      techStack: "React Native, JavaScript, Expo",
      liveDemo: "https://expo.dev/@mceater/memoirs",
      github: "https://github.com/Mceater/Memoirs"
    },

    {
      id: 6,
      title: "Adverts",
      description: "A platform built using React to allow enterprises to promote their products/applications to potential consumers. Features user authentication, payment processing via PayPal, URL shortening service, and ad management with categories and filtering.",
      techStack: "React, MongoDB, PayPal API, Auth0, JavaScript",
      liveDemo: "https://adverts-dun.vercel.app",
      github: "https://github.com/Mceater/adverts"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Tech Stack: {project.techStack}
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========================
// Skills Section
// ========================
function Skills() {
  const categories = [
    { title: "Languages and Paradigms", skills: [" JavaScript", "Python", "Java", "HTML & CSS","OOP", "Data Structures & Algorithms (DSA)"] },
    { title: "Tools and Platforms", skills: ["Ignition (SCADA)", "Bitbucket", "GitHub", "Restful APIs", "Jira", "Miro", "VS code."] },
    { title: "Databases and Storages", skills: ["MongoDB", "S3 Buckets", "MySQL", "PostgreSQL"] },
    { title: "Frameworks", skills: ["React", "React Native", "Flask"] },
  ];
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ========================
// About Section
// ========================
function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a Bachelors of IT (Web and App development, Cyber Security(minors)) graduate from Macquarie University with hands-on experience in software development. Passionate about solving problems with scalable tech. Outside work, I enjoy coding litle side projects and exploring emerging technologies. In my free time, I enjoy hiking, gymming and cooking.
      </p>
    </section>
  );
}

// ========================
// Contact Section
// ========================
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-6">Let's connect! Reach out for opportunities or collaborations.</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Mceater" target="_blank"><Github className="w-6 h-6" /></a>
        <a href="https://linkedin.com/in/farhan-risan" target="_blank"><Linkedin className="w-6 h-6" /></a>
      </div>
    </section>
  );
}

// ========================
// Main Portfolio Component
// ========================
export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Farhan R. Built with React, Tailwind, and Framer Motion.
      </footer>
    </div>
  );
}
