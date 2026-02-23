const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java (OOPs, DSA)', 'JavaScript'],
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'VS Code', 'Postman', 'MySQL Workbench'],
    },
    {
      title: 'Core Concepts',
      skills: ['REST APIs', 'JWT Authentication', 'Responsive UI Design'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
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

export default Skills;
