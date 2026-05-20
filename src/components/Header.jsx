import Title from "./Title";

export default function Header({ title }) {
  return (
    <header id="custom_header">
      <Title title={title} />
    </header>
  );
}
