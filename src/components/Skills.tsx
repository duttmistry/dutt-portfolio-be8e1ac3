
export const Skills = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Redux", "Next.js"],
    "Backend": ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    "Tools": ["Git", "Docker", "AWS", "CI/CD", "Jest"]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-sm text-gray-600 rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
