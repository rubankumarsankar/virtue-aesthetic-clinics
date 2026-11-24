import Link from "next/link";
import { blogs } from "@/data/home";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";

const cardTitle = { fontSize: 44, lineHeight: 1.05, fontWeight: 600 } as const;

export default function StoriesAndBlogs() {
  return (
    <section id="stories" className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 28 }}>
        <PatientStoriesCard />
        <BlogsCard />
      </div>
    </section>
  );
}

function PatientStoriesCard() {
  return (
    <div
      className="rv card-pad"
      style={{
        background: "#173532",
        color: "#fff",
        borderRadius: 32,
        padding: 48,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "space-between",
        minHeight: 440,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span className="kick" style={{ color: "#D9B98A" }}>
          Patient stories
        </span>
        <h2 className="h2" style={cardTitle}>
          Patient Experiences at Virtue Aesthetic Clinic
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#C9DBD7" }}>
          Every patient&apos;s experience is different. Read feedback shared by patients about their consultations and experiences at
          Virtue Aesthetic Clinic.
        </p>
      </div>
      <div
        style={{
          border: "1.5px dashed rgba(255,255,255,.3)",
          borderRadius: 20,
          padding: 20,
          fontSize: 14,
          lineHeight: 1.6,
          color: "#C9DBD7",
        }}
      >
        Slot for genuine, permissioned patient feedback — keep hidden until approved stories are supplied.
      </div>
      <div>
        <Button href="/patient-stories/" variant="b3">
          Read Patient Stories
        </Button>
      </div>
    </div>
  );
}

function BlogsCard() {
  return (
    <div
      id="blogs"
      className="rv card-pad"
      style={{ background: "#EEF4F2", borderRadius: 32, padding: 48, display: "flex", flexDirection: "column", gap: 20 }}
    >
      <span className="kick">Learn · Phase 2</span>
      <h2 className="h2" style={cardTitle}>
        Learn More About Your Skin &amp; Hair
      </h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A5F5C" }}>
        Understanding your skin and hair concerns can help you have more informed conversations during a consultation. Explore
        educational articles covering common skin conditions, hair concerns, aesthetic procedures and treatment-related questions.
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {blogs.map((b) => (
          <Link
            key={b.title}
            href="/blogs/"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              padding: "16px 0",
              borderTop: "1px solid #C4D8D4",
              textDecoration: "none",
              font: "500 17px var(--display)",
            }}
          >
            {b.title} <ArrowUpRight size={18} />
          </Link>
        ))}
      </div>
      <Link href="/blogs/" style={{ fontWeight: 600, fontSize: 15 }}>
        Explore More Articles
      </Link>
    </div>
  );
}
