import { Placeholder } from "./Placeholder";

const TOKEN = /^\{\{.+\}\}$/;

export function Value({ text }: { text: string }) {
  if (TOKEN.test(text)) {
    return <Placeholder variant="token">{text}</Placeholder>;
  }
  return <>{text}</>;
}
