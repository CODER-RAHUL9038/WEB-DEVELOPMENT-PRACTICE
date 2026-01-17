export default function Form() {
  function handleForm(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <form>
      <input type="text" placeholder="Write Something" />
      <button onClick={handleForm}>Submit</button>
    </form>
  );
}
