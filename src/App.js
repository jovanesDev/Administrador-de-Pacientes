
import React , {Fragment,useState, useEffect}  from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'



function App() {

  // Almacenando Citas en local storange

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if (!citasIniciales){

    citasIniciales = [];
  }




  // Creando state para App.js

  const [citas , guardarCitas] = useState(citasIniciales)


  // Creando funcion que va a obtener la cita por props

  const createCitas = cita => {
  
    guardarCitas([...citas,cita])
}




  // Creando el UseEffect 

  useEffect(()=>{

    if(citasIniciales){

      localStorage.setItem('citas',JSON.stringify(citas))

    }else{

      localStorage.setItem('citas',JSON.stringify([]))

    }


  },[citas])




// Funcion que elimina citas 

const eliminarCita = id => {


  const nuevaCita = citas.filter( cita => cita.id != id)

  guardarCitas(nuevaCita)
}







// Mensaje 

  const titulo = citas.length === 0 ? 'No Tiene Citas'  : 'Administra tus Citas' ;






  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className='container'>

        <div className="row">

          <div className="one-half column">
              <Formulario
                  createCitas = {createCitas}
              />
          </div>

          <div className="one-half column">
              <h2>{titulo}</h2>

    {/* Recorriendo las citas que llega por props*/}

            {citas.map(cita => (

              <Cita  

                key={cita.id}
                cita ={cita}
                eliminarCita = {eliminarCita}
                />
            ))}
          </div>


        </div>


      </div>


    </Fragment>


  );
}

export default App;
