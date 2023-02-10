import { useEffect, useRef } from "react";

const TestandoRef = () => {
  const h1Ref = useRef();

  //const h1Ref = document.querySelector('div h1#titulo')

  function verRef() {
    console.log(h1Ref.current);
  }


  return (
    <div>
      <h1 ref={h1Ref} id="titulo">
        Teste Ref
      </h1>
      <button onClick={verRef}>Ver</button>
    </div>
  );
};

export default TestandoRef;
