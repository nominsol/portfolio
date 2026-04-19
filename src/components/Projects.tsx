import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type ProjectType } from "../data/portfolio";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  return (
    <>
      <section id="projects" className="section">
        <div className="inner">
          <SectionTitle
            eyebrow="프로젝트"
            // title="Selected Projects"
            description="새로운 기술을 학습하고 구현한 주요 프로젝트입니다."
          />

          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.title + index}
                className="project-card clickable"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
              >
                {project.image && (
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                )}

                <div className="project-content">
                  <div className="project-top-row">
                    <h3>{project.title}</h3>
                    <span className="project-badge">{project.type}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="chips">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
