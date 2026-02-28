interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalContentProps {
  intro: string;
  sections: LegalSection[];
}

export default function LegalContent({ intro, sections }: LegalContentProps) {
  return (
    <>
      <p style={{ whiteSpace: 'pre-line' }}>{intro}</p>
      {sections.map((section, i) => (
        <section key={i}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((para, j) => (
            <p key={j} style={{ whiteSpace: 'pre-line' }}>
              {para}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}
