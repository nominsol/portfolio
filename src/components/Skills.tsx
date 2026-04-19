import { skillCategories } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="inner">
        <SectionTitle
          eyebrow="기술 스택"
          // title="Skills & Tools"
          description="사용 가능한 기술과 익숙한 도구를 정리하는 섹션입니다."
        />

        <div className="skills-wrap">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-group">
              <h3>{category.name}</h3>
              <div className="chips">
                {category.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
