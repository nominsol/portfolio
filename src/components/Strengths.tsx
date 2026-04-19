import { motion } from "framer-motion";
import { strengths } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Strengths() {
  return (
    <section className="section" id="strengths">
      <div className="inner">
        <SectionTitle
          eyebrow="핵심 역량"
          description="다양한 관점을 유연하게 수용하여 가장 견고한 기술적 해답을 찾아냅니다."
        />

        <div className="grid grid-3">
          {strengths.map((item, index) => (
            <motion.article
              key={item.title}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
