// import { useState } from "react";
// import './InputState.css'

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");



//   // setting fullName state.
//   const fullName = firstName + " " + lastName;

//   // Event handler to obtain the the value from the input of yhe firstName
//   function handleFirstName(e) {
//     setFirstName(e.target.value);
//   }
//   // Event handler to obtain the the value from the input of yhe lastName
//   function handleLastName(e) {
//     setLastName(e.target.value);
//   }

//   // rendering to the DOM
//   return (
//     <>
//       <label>
//         <h2>Let's check you in</h2>
//         FirstName: {""}
//         <input value={firstName} onChange={handleFirstName} /> <br />
//         FirstName: {""}
//         <input value={lastName} onChange={handleLastName} />
//       </label>
//       <div>
//         <h3>
//         <strong>Your ticket number is : <p className="red">{fullName}</p></strong>
//         </h3>
//       </div>
//     </>
//   );
// };
// export default Form;
