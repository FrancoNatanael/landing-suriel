import { cn } from "@/lib/utils";
import { ArrowIcon } from "./ArrowIcon";

export type ButtonVariant = "primary" | "outline" | "submit" | "light";

const base =
  "group inline-flex h-13 items-center justify-center text-base leading-body transition-colors duration-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2";

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
  /** Flecha al final del texto. Por defecto la llevan todos los botones menos "submit". */
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  arrow = variant !== "submit",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, className)} {...props}>
      {children}
      {arrow ? (
        <ArrowIcon className="ml-3 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}
