import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// ========================
// Projects Section
// ========================
export function Projects() {
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
