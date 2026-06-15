import React from "react";
import { business } from "../data/siteData";

export function FormatBusinessName({ text }: { text: string }) {
  if (!text) return null;
  const regex = /(Rama[-\s]+Fly\s+Construction\s+Group\s+LLC|Rama[-\s]+Fly\s+Construction|Rama[-\s]+Fly)/gi;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) => {
        if (part.match(regex)) {
          return (
            <strong key={index} className="font-bold">
              <a
                href={business.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                {part}
              </a>
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}
