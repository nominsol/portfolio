import { contact } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="inner">
        <SectionTitle
          eyebrow="감사합니다"
          // title="Contact"
          description="궁금한 점이 있으시다면 아래의 연락처로 연락 부탁드립니다."
        />

        <div className="contact-grid">
          <div className="contact-info card">
            <h3>연락처</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
