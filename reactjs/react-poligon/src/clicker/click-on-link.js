function ClickOnLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <div>
      <a href="#" onClick={handleClick}>
        ClickOnLink
      </a>
    </div>
  );
}

export default ClickOnLink;
