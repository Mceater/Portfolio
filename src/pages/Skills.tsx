import { motion } from "framer-motion";

// ========================
// Skills Section
// ========================
export function Skills() {
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
