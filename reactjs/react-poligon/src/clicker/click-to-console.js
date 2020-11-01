function ClickToConsole() {
  function toConsole() {
    console.log("ClickToConsole");
  }

  return (
    <div>
      <button onClick={toConsole}>ClickToConsole</button>
    </div>
  );
}

export default ClickToConsole;
