import type { PropsWithChildren } from "react";

export interface FooterProps extends PropsWithChildren {}

export const Footer = ({ children }: FooterProps) => (
  <footer>{children}</footer>
);
