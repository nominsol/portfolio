import { createPortal } from "react-dom";
import type { ProjectType } from "../data/portfolio";

type ProjectModalProps = {
  project: ProjectType | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasGithub = project.githubUrl && project.githubUrl !== "#";
  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasLinks = hasGithub || hasLive;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          ×
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>
        </div>

        <p className="modal-summary">{project.summary}</p>

        <div className="chips modal-chips">
          {project.techStack.map((tech) => (
            <span key={tech} className="chip small">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-meta">
          <div>
            <span className="meta-label">참여 인원</span>
            <strong>{project.people}</strong>
          </div>

          <div>
            <span className="meta-label">기간</span>
            <strong>{project.period}</strong>
          </div>

          {hasLinks && (
            <div>
              <span className="meta-label">관련 링크</span>
              <div className="modal-links">
                {hasGithub && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    깃허브
                  </a>
                )}

                {hasLive && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    배포 사이트
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="modal-section">
          <h3>상세 내용</h3>

          {project.details.map((section, index) => (
            <div key={index} className="detail-block">
              <h4 className="detail-title">{section.title}</h4>

              <ul>
                {section.contents.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
