import "./Button.css";
import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, onClick, variant = "primary" }: Props) => {
  const className = `button button--${variant}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
