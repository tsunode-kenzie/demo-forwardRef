import { forwardRef } from "react";

// onChange, onBlur, name => rest

const Input = ({ label, id, error, ...rest }, ref) => {
  console.log(rest)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default forwardRef(Input);

// export const InputDiferentee = forwardRef(
//   ({ label, id, type, error, ...rest }, ref) => {
//     return (
//       <div>
//         <label htmlFor={id}>{label}</label>
//         <input id={id} type={type} ref={ref} {...rest} />
//         {error ? <p>{error}</p> : null}
//       </div>
//     );
//   }
// );
