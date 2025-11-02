const Skills = () => {
  const skills = {
    "Programming Languages": ["JavaScript/TypeScript", "Python", "C", "SQL"],
    "Backend and API frameworks": ["Node.js", "Express.js", "Flask"],
    Databases: ["PostgreSQL", "MongoDB"],
    "DevOps & Tools": ["CI/CD", "Git", "Linux", "Docker", "Nginx"],
    "AI & Data Science": ["PyTorch", "NumPy", "Pandas", "Scikit-learn"],
    Exploring: ["Machine Learning and Automation", "Mathematics", "Networks Engineering and The Internet"],
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="mb-8 text-4xl font-bold text-gray-800 text-center hover:text-gray-900 transform hover:scale-105 transition-all duration-200">What I have learned?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-3 hover:text-gray-900 hover:scale-101 text-xl font-semibold text-gray-800">{category}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-lg text-gray-700 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-200">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;