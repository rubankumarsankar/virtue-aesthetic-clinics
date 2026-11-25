import { marqueeCategories } from "@/data/treatments";

/** Infinite scrolling band of category names (content duplicated for a seamless loop). */
export default function CategoryMarquee() {
  const items = [...marqueeCategories, ...marqueeCategories];
  return (
    <div className="tmarq" aria-hidden="true">
      <div className="tmarq-track">
        {items.map((label, i) => (
          <span key={i}>
            {label}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
