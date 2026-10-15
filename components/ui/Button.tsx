import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "submit" | "light";

const base =
  "inline-flex h-13 items-center justify-center text-base leading-body transition-colors duration-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-navy bg-navy px-7 text-white hover:bg-white hover:text-navy focus-visible:outline-white",
  outline:
    "border border-white px-7 text-white hover:bg-white hover:text-navy focus-visible:outline-white",
  light:
    "border border-white bg-white px-7 text-navy-night hover:bg-transparent hover:text-white focus-visible:outline-white",
  submit:
    "bg-navy px-9 text-white hover:bg-ink focus-visible:outline-navy",
};

export function buttonClasses(variant: ButtonVariant, className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = React.ComponentProps<"a"> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}
