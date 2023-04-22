import "./styles.css";
import CurrentDate from "./CurrentDate";
import Counter from "./Counter";
import CurrentVersion from "./CurrentVersion";
import { useEffect, useState } from "react";

export default function App() {
  const [appstate, updateappstate] = useState(0);
  const cbfunction = () => {
    console.log("useeffect called");
  };
  const [counter2, updatecounter2] = useState(0);
  const initivalue = 1;
  useEffect(cbfunction, []); //1

  const updatestate = (counter) => {
    // const currentstate = appstate
    updateappstate(counter);
  };

  const sum = 0;
  console.log("App compbefore returning");
  return (
    <div className="App">
      {console.log("App comp after returning")}
      <Counter
        initialvalue={initivalue}
        sum={sum}
        updateparentapp={updatestate}
      />
      <CurrentDate />
      <CurrentVersion appstate={appstate} updateappstate={updatestate} />
      <button onClick={() => updatecounter2(counter2 + 1)}>
        Update counter 2{" "}
      </button>
    </div>
  );
}

// App()
// Counter({ initialvalue: 1, sum: 200})

// parent to child communication
// child to parent communication
// child to child communication
