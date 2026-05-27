"use client";

import { useRef, useState } from "react";

const CODE_LENGTH = 6;
const CODE_SLOTS = [
  "slot-1",
  "slot-2",
  "slot-3",
  "slot-4",
  "slot-5",
  "slot-6",
] as const;

type VerificationCodeInputProps = {
  onCodeChange?: (code: string) => void;
};

export function VerificationCodeInput({
  onCodeChange,
}: VerificationCodeInputProps) {
  const [values, setValues] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, nextValue: string) => {
    const sanitized = nextValue.replace(/[^0-9]/g, "").slice(0, 1);
    const draft = [...values];
    draft[index] = sanitized;
    setValues(draft);
    onCodeChange?.(draft.join(""));

    if (sanitized.length === 1 && index < CODE_LENGTH - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && values[index] === "" && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-3">
      {CODE_SLOTS.map((slot, index) => (
        <input
          key={slot}
          ref={(element) => {
            refs.current[index] = element;
          }}
          inputMode="text"
          pattern="[0-9]*"
          maxLength={1}
          value={values[index]}
          onChange={(event) => handleChange(index, event.currentTarget.value)}
          onKeyDown={(event) => handleKeyDown(index, event.key)}
          className="h-12 w-full border border-white/20 bg-surface text-center text-xl uppercase text-white outline-none transition-all focus:border-secondary focus:shadow-neon-secondary"
          aria-label={`Verification character ${index + 1}`}
        />
      ))}
    </div>
  );
}
