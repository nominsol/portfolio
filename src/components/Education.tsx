import { certifications, education } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <>
      <section id="education" className="section">
        <div className="inner">
          {/* Education & Experience */}
          <SectionTitle
            eyebrow="경험"
            description="교육 및 실무 경험을 정리한 섹션입니다."
          />

          <div className="timeline">
            {education.map((item) => (
              <article key={item.title + item.period} className="timeline-item">
                <div className="timeline-left">
                  <p className="timeline-period">{item.period}</p>
                </div>

                <div className="timeline-right">
                  <h3>{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="certification" className="section">
        <div className="inner">
          {/* Certifications & Awards */}
          <SectionTitle
            eyebrow="자격증 및 수상"
            description="자격증 및 기타 성과를 정리한 섹션입니다."
          />

          <div className="timeline">
            {certifications.map((item) => (
              <article key={item.title + item.period} className="timeline-item">
                <div className="timeline-left">
                  <p className="timeline-period">{item.period}</p>
                </div>

                <div className="timeline-right">
                  <h3>{item.title}</h3>
                  {item.subtitle && (
                    <p className="timeline-subtitle">{item.subtitle}</p>
                  )}
                  {item.bullets.length > 0 && (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
