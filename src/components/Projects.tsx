type projectStatus = "In Progress" | "Completed";
type Project = {
  title: string;
  description: string;
  technologies: string[];
  webpageLink: string;
  githubLink: string;
  status: projectStatus;
};


const Projects = () => {
  const projects:Project[] = [
    {
      title:"Codex_",
      description: "A CLI based coding agent that leverages OPENSOURCE LLMs and agents to assist developers in developing applications at lower costs but far better results than enterprise coding tools.",
      technologies: ["NodeJs"," TypeScript", "Langchain", "Commander.js"],
      webpageLink: "#",
      githubLink: "https://github.com/HASNAIN-ALI-MUHAMMAD/codex_",
      status:"In Progress",
    },
  ];

  return (
    <>
      <h2 className="mb-8 text-4xl  font-bold text-gray-800 text-center hover:text-gray-900 transform hover:scale-105 transition-all duration-200">What have I done?</h2>
      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-md">
            <h3 className="mb-2 text-2xl hover:text-gray-900 hover:scale-101 font-semibold text-gray-800">{project.title}</h3>
            <p className="mb-4 max-w-210 text-gray-600">{project.description}</p>
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
                {project.status === "In Progress" ? "Live Demo (Coming Soon)" : "Live Demo"}
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
