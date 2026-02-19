import type { CodeTypes } from "../types";
import Code from "./Code";

interface CodeListProps {
  items: CodeTypes[];
}
export default function CodeList({ items }: CodeListProps) {
  return (
    <div>
      {items.map((list) => (
        <Code key={list.id} name={list.name} price={list.price} />
      ))}
    </div>
  );
}
