const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Budge Budge Institute of Technology, MAKAUT',
      duration: 'Expected 2026',
      grade: 'CGPA: 7.42/10.0 (till 7th Semester)',
      highlights: [
        'Specialized in Full Stack Development',
        'Strong foundation in Data Structures and Algorithms',
        'Active participant in coding competitions',
      ],
    },
    {
      degree: 'Class XII (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2021',
      grade: '77.8%',
      highlights: [],
    },
    {
      degree: 'Class X (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2019',
      grade: '76%',
      highlights: [],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {edu.duration}
                </span>
              </div>
              <p className="text-lg text-blue-600 font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-700 font-semibold mb-3">{edu.grade}</p>
              {edu.highlights.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
