const Projects = () => {
  const projects = [
    {
      title: "E-commerce Backend API",
      description: "A robust backend API for an e-commerce platform, handling user authentication, product management, and order processing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      webpageLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management CLI Tool",
      description: "A command-line interface tool for managing tasks, including adding, deleting, and marking tasks as complete.",
      technologies: ["Python", "Click", "SQLite"],
      webpageLink: "#",
      githubLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat application with user authentication and persistent messaging using WebSockets.",
      technologies: ["Node.js", "Socket.io", "React", "PostgreSQL"],
      webpageLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website, showcasing my skills, projects, and experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      webpageLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <>
      <h2 className="mb-8 text-4xl font-bold text-gray-800 text-center hover:text-gray-900 transform hover:scale-105 transition-all duration-200">What have I done?</h2>
      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index}>
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-200 opacity-75">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.webpageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200"
              >
                View Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
