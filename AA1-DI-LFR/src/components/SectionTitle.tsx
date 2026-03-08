type Props = {
  text: string;
};

export default function SectionTitle({ text }: Props) {
  return (
    <h1
      style={{
        textAlign: "center",
        color: "var(---color-texto)",
        marginBottom: "30px",
        fontSize: "2.5rem",
      }}
    >
      {text}
    </h1>
  );
}