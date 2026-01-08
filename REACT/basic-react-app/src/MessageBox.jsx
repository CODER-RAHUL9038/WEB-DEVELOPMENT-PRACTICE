export default function MessageBox({ userName, textColor }) {
  return (
    <div>
      <h1 style={{ color: textColor }}>Hello, {userName}</h1>
    </div>
  );
}
