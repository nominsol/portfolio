import { skillCategories } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="inner">
        <SectionTitle
          eyebrow="기술 스택"
          // title="Skills & Tools"
          description="현재 사용할 수 있고 학습 중인 기술들입니다."
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
