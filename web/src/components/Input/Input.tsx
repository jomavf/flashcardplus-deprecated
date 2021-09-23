import styles from "./Input.module.css";

import { useState } from "react";
import { Text } from "..";

interface TextProps {
  label: string;
  initialValue?: string;
  type?: "text" | "textarea" | "select";
  options?: any[];
}

export const Input = ({
  label,
  initialValue = "",
  type = "text",
  options = [],
}: TextProps) => {
  const [value, setValue] = useState(initialValue);

  const TextComponent: { [key: string]: any } = {
    text: <input value={value} onChange={(e) => setValue(e.target.value)} />,
    textarea: (
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
      />
    ),
    select: (
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">Default</option>
        {options.map((option: any, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ),
  };

  return (
    <div className={styles.container}>
      <Text variant="p">{label}</Text>
      {TextComponent[type]}
    </div>
  );
};
