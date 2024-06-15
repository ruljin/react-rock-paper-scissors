import type { PropsWithChildren } from "react";

export interface FooterProps extends PropsWithChildren {
  className?: string;
}

export const Footer = ({ children, className }: FooterProps) => (
  <footer className={className}>{children}</footer>
);
