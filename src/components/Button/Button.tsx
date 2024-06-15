import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);
