"use client";

import { useState } from "react";

type Props = { number: string; copyLabel: string; copiedLabel: string; errorLabel: string };

export function CopyMemberNumber({ number, copyLabel, copiedLabel, errorLabel }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(number);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return <div className="member-copy">
    <button type="button" className="copy-button" onClick={copyNumber} aria-label={`${copyLabel}: ${number}`}>
      {status === "copied" ? copiedLabel : copyLabel}
    </button>
    <span className={status === "error" ? "copy-error" : "sr-only"} role="status" aria-live="polite">
      {status === "copied" ? copiedLabel : status === "error" ? errorLabel : ""}
    </span>
  </div>;
}
