import { Fragment } from "react";

const BRAND = /\b(SURIEL)\b/;

/** Texto con la marca en negrita: cada "SURIEL" se resalta. Se escribe siempre en mayúsculas en el contenido. */
export function Brand({ text }: { text: string }) {
  return (
    <>
      {text.split(BRAND).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
