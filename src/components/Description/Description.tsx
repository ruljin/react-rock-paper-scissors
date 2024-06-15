import type { PropsWithChildren } from "react";
import styles from "./Description.module.scss";

export interface DescriptionProps extends PropsWithChildren {}

export const Description = ({ children }: DescriptionProps) => (
  <small className={styles.description}>{children}</small>
);
