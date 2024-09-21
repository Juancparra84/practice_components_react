

export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert(name + " Haz hecho click en el botón");
  }

  const handleDobuleClicked = () => {
    alert("Haz hecho doble click en el botón");
  }

  const handleMouseEnter = (e) => {
    alert ("Haz ENTRADO la caja");
  }

  const handleMouseLeave = (e) => {
    alert ("Haz SALIDO de la caja");
  }

  const handleMouse= (e, action) => {
    alert(`Haz ${action} la caja`)
  };

  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre!!");  };

  const handleOutsideInput = (e) =>{
    console.log("Estás fuera del input, Adiós!!")
  };


  return (
    <div>
        <h1> FourthComponent </h1>
        {/*Evento clic con función anónima*/}
        <button className="btn btn-danger mx-2"
        onClick={() =>{
            alert ("Hola soy un evento click")
        }}
        > Haz Click!!
        </button>

         {/*Evento clic con función parámetro*/}
         <button className="btn btn-success mx-2"
         onClick={e=>handleClicked(e, "Juan")}
         >
            Aquí tambien haz click!
         </button>

         {/*Evento doble clic*/}
         <button className="btn btn-info mx-2"
         onDoubleClick={handleDobuleClicked}
         >
            haz doble click!
         </button>

        <div id="box1" className="mt-4"
         onMouseEnter={ e => handleMouseEnter(e)}
         onMouseLeave={ e => handleMouseLeave(e)}
         >
            <p>Pasa el mouse por encima!!</p>
        </div>

        <div id="box2" className="mt-4"
         onMouseEnter={ e => handleMouse(e, "Entrado a")}
         onMouseLeave={ e => handleMouse(e, "Salido de")}
         >
            <p>Pasa el mouse por encima!!</p>
        </div>

        <div className="mt-4">
          <input type="text"
           onFocus={ e => handleInsideInput (e)}
           onBlur={ e => handleOutsideInput(e)}
          />
        </div>
    </div>
  )
}
