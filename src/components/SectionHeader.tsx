import type { ReactNode } from "react";
import { GlassBadge } from "./GlassBadge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  children: ReactNode;
};

export function SectionHeader({ eyebrow, title, titleId, children }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <GlassBadge>{eyebrow}</GlassBadge>
      <h2 id={titleId} className="heading-medium">
        {title}
      </h2>
      <p className="text-body">{children}</p>
    </div>
  );
}
