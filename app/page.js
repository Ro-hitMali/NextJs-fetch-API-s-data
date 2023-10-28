import NameForm from "./NameForm";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", padding: "10px", margin: "10px" }}>
        Name Information Application
      </h1>
      <NameForm />
    </div>
  );
}
