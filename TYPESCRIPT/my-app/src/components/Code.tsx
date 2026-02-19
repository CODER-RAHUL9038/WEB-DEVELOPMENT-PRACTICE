interface TypeProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export default function Type({ name, price, isSpecial = false }: TypeProp) {
  return (
    <article>
      <h2>
        {name}
        {isSpecial && <span>🌟</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
