import type { ButtonHTMLAttributes, ReactNode } from "react";
import Magnet from "./Magnet";

type ContactButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children?: ReactNode;
};

export default function ContactButton({
  href,
  className = "",
  type = "submit",
  children = "Contact Me",
  ...props
}: ContactButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white",
    "px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base",
    "transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
    className,
  ].join(" ");

  const style = {
    background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
    boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
    outline: "2px solid #ffffff",
    outlineOffset: "-3px",
  } as const;

  if (href) {
    return (
      <Magnet padding={36} strength={5} className="inline-flex">
        <a href={href} className={classes} style={style}>
          {children}
        </a>
      </Magnet>
    );
  }

  return (
    <Magnet padding={36} strength={5} className="inline-flex">
      <button type={type} className={classes} style={style} {...props}>
        {children}
      </button>
    </Magnet>
  );
}
