import { cn } from "@/lib/utils";

type PlaceholderProps = {
  variant: "stat" | "logo" | "token";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  stat: "border border-dashed border-line-strong px-3 text-subtle",
  logo: "flex h-12 w-50 items-center justify-center border border-dashed border-line-strong font-semibold text-muted grayscale",
  token: "border border-dashed border-line-strong px-1",
};

export function Placeholder({ variant, className, children }: PlaceholderProps) {
  const Tag = variant === "logo" ? "div" : "span";
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
}
