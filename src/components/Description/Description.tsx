import type { PropsWithChildren } from "react";

export interface DescriptionProps extends PropsWithChildren {}

export const Description = ({ children }: DescriptionProps) => (
  <small>{children}</small>
);
