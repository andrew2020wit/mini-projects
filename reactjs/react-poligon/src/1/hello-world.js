const element = <h3> Hello World!</h3>;

export function HelloWorld() {
  return (
    <div>
      <h2>Static component</h2>
      <div>{element}</div>
    </div>
  );
}
