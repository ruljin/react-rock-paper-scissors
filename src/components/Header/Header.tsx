import type { PropsWithChildren } from "react";
import styles from "./Header.module.scss";

export interface HeaderProps extends PropsWithChildren {}

export const Header = ({ children }: HeaderProps) => (
  <header className={styles.header}>{children}</header>
);
