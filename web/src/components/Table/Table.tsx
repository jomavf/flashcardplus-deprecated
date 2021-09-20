import styles from "./Table.module.css";

interface TableProps {
  data: any[];
  columns: any[];
  headers: any[];
  variant: string;
  children: any;
}

export const Table = ({
  children,
  variant = "default",
  data,
  headers,
  ...props
}: TableProps) => {
  return (
    <table className={styles[variant]} {...props}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
