import { useEffect, useId, useMemo, useRef, useState } from "react";

type Props = {
  label: string;
  text?: string;
  url?: string;
};

function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(() => {
    return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  });

  useEffect(() => {
    const mq = window.matchMedia?.("(pointer: coarse)");
    if (!mq) return;
    const onChange = () => setCoarse(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return coarse;
}

export function ScriptureChip({ label, text, url }: Props) {
  const popoverId = useId();
  const coarse = useIsCoarsePointer();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const hasText = Boolean(text?.trim());

  const displayText = useMemo(() => (text ?? "").trim(), [text]);

  const closeSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 90);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // If we don't have verse text, just link out (useful for copyrighted translations like ESV).
  if (!hasText) {
    if (!url) return <span className="storyRef">{label}</span>;
    return (
      <span className="verseChip">
        <a className="verseButton" href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      </span>
    );
  }

  return (
    <span
      className={open ? "verseChip open" : "verseChip"}
      onMouseEnter={() => {
        if (coarse) return;
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={() => {
        if (coarse) return;
        closeSoon();
      }}
    >
      <button
        type="button"
        className="verseButton"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => {
          if (coarse) return;
          cancelClose();
          setOpen(true);
        }}
        onBlur={() => {
          if (coarse) return;
          closeSoon();
        }}
      >
        {label}
      </button>

      {open ? (
        <div
          id={popoverId}
          className="versePopover"
          role="dialog"
          aria-label={`Verse text for ${label}`}
          onMouseEnter={() => {
            if (coarse) return;
            cancelClose();
          }}
          onMouseLeave={() => {
            if (coarse) return;
            closeSoon();
          }}
        >
          <div className="verseText">{displayText}</div>
          {coarse ? (
            <button
              type="button"
              className="verseClose"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          ) : null}
        </div>
      ) : null}
    </span>
  );
}


