export default function (props) {
  return (
    <>
      <div>
        {" "}
        Last Time the counter was changed -{new Date().getHours()}Hours-{" "}
        {new Date().getMinutes()}Min - {new Date().getSeconds()}Sec
      </div>
      <button onClick={() => props.updateappstate(props.appstate + 1)}>
        {" "}
        Update App state (current version : {props.appstate}){" "}
      </button>
    </>
  );
}
