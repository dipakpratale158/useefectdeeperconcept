// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function Counter(args) {
//   let [counter, updateCounter] = useState(args.initialvalue);
//   let sum = args.sum;
//   const counterId = localStorage.getItem("counterid");
//   useEffect(() => {
//     if (counterId) {
//       axios
//         .get(
//           `https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter/${counterId}`
//         )
//         .then((res) => {
//           const counterval = res.data.currentcount;
//           updateCounter(counterval);
//         });
//     }
//   }, []);

//   const storeinBackend = async (counterVAl) => {
//     const counterId = localStorage.getItem("counterid");
//     if (counterId) {
//       //put request
//       axios.put(
//         `https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter/${counterId}`,
//         {
//           currentcount: counterVAl
//         }
//       );
//     } else {
//       const res = await axios.post(
//         "https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter",
//         {
//           currentcount: counterVAl
//         }
//       );
//       console.log(res);
//       localStorage.setItem("counterid", res.data._id);
//     }
//   };

//   const updateCounterfun = (actiontype) => {
//     switch (actiontype) {
//       case "Increment":
//         updateCounter(counter + 1);
//         storeinBackend(counter + 1);
//         args.updateparentapp(counter + 1);
//         break;
//       case "Decrement":
//         updateCounter(counter - 1);
//         storeinBackend(counter - 1);
//         args.updateparentapp(counter - 1);
//         break;

//       case "Incrementbysum":
//         updateCounter(counter + sum);
//         storeinBackend(counter + sum);
//         args.updateparentapp(counter + sum);
//         break;

//       default:
//         throw new Error();
//     }
//   };

//   return (
//     <div>
//       {console.log("Counter component rerendering happened")}
//       <span>{counter}</span>
//       <br />
//       {/* <Childcomp />  */}
//       <button onClick={() => updateCounterfun("Increment")}> Increment </button>
//       <button onClick={() => updateCounterfun("Incrementbysum")}>
//         {" "}
//         Increment by sum value{" "}
//       </button>
//       <button onClick={() => updateCounterfun("Decrement")}> decrement </button>
//       {/* <button onClick={decrementCounterbysum}> decrement  by sum value</button> */}
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Counter(args) {
  const [counter, setCounter] = useState(args.initialvalue);
  const sum = args.sum;
  const counterId = localStorage.getItem("counterid");

  useEffect(() => {
    const fetchCounter = async () => {
      if (counterId) {
        try {
          const res = await axios.get(
            `https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter/${counterId}`
          );
          const counterval = res.data.currentcount;
          setCounter(counterval);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCounter();
  }, [counterId]);

  const storeInBackend = async (counterVal) => {
    try {
      const counterId = localStorage.getItem("counterid");
      if (counterId) {
        //put request
        await axios.put(
          `https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter/${counterId}`,
          {
            currentcount: counterVal
          }
        );
      } else {
        const res = await axios.post(
          "https://crudcrud.com/api/829d024ac5e84da6a8688bcf8acbd584/counter",
          {
            currentcount: counterVal
          }
        );
        console.log(res);
        localStorage.setItem("counterid", res.data._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCounterfun = async (actiontype) => {
    try {
      switch (actiontype) {
        case "Increment":
          setCounter(counter + 1);
          await storeInBackend(counter + 1);
          args.updateparentapp(counter + 1);
          break;
        case "Decrement":
          setCounter(counter - 1);
          await storeInBackend(counter - 1);
          args.updateparentapp(counter - 1);
          break;
        case "Incrementbysum":
          setCounter(counter + sum);
          await storeInBackend(counter + sum);
          args.updateparentapp(counter + sum);
          break;
        default:
          throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {console.log("Counter component rerendering happened")}
      <span>{counter}</span>
      <br />
      {/* <Childcomp />  */}
      <button onClick={() => updateCounterfun("Increment")}> Increment </button>
      <button onClick={() => updateCounterfun("Incrementbysum")}>
        {" "}
        Increment by sum value{" "}
      </button>
      <button onClick={() => updateCounterfun("Decrement")}> decrement </button>
      {/* <button onClick={decrementCounterbysum}> decrement  by sum value</button> */}
    </div>
  );
}
