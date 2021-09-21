import styles from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "p";
}

export const Text = ({ children, variant = "p" }: TextProps) => {
  const className = `${styles.base} ${styles[variant]}`;

  const text = {
    title: <h1 className={className}>{children}</h1>,
    subtitle: <h2 className={className}>{children}</h2>,
    p: <p className={className}>{children}</p>,
  };

  return text[variant];
};
