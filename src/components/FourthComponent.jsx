

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

        <div id="box1"
         onMouseEnter={ e => handleMouseEnter(e)}
         onMouseLeave={ e => handleMouseLeave(e)}
         >
            <p>Pasa el mouse por encima!!</p>
        </div>
    </div>
  )
}
