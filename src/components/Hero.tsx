import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="inner hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy"
        >
          <p className="hero-kicker">안녕하세요,</p>
          <h1>
            {profile.role}
            <br />
            <span className="highlight">{profile.name}</span>
            입니다.
          </h1>
          <p className="hero-description">{profile.intro}</p>

          <div className="hero-actions">
            <a
              className="btn primary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              이력서
            </a>
            <a
              className="btn ghost"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
