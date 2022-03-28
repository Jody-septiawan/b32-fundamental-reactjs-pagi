export default function List(props) {
  console.log(props);

  return (
    <div>
      <h1>{props.nama}</h1>
      <h4>{props.year}</h4>
      <button onClick={props.handleClick}>Cmick Me</button>
    </div>
  );
}
