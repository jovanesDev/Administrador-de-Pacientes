import React , {Fragment, useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const Formulario = ({createCitas}) => {

// Creando el State


    const [cita,actualizarCitas] = useState({

            mascota : '',
            propetario : '',
            fecha : '',
            hora : '',
            sintomas : '',
    });


// Creando el State de error

const [error, actualizarError] = useState(false);



    // actualizando State


   const actualizarState = e => {

         actualizarCitas({

            ...cita,
            [e.target.name]:e.target.value
         })
    }



    // Extraer valores de State

    const {mascota , propetario , fecha, hora , sintomas} = cita


    // enviar el formulario 

    const submitCita = e => {

        e.preventDefault();

        // Validar

        if (mascota.trim() ==='' || propetario.trim() ==='' || fecha.trim()==='' ||
               hora.trim() ==='' || sintomas.trim() ===''
            ) {
                actualizarError(true)
                return ;
            }

            actualizarError(false)

        // Dar un ID

        cita.id = uuidv4();

        // crear Citas 

        createCitas(cita)

        // Reinicar el Form

        actualizarCitas({
            mascota : '',
            propetario : '',
            fecha : '',
            hora : '',
            sintomas : '',

        })
    }

    return (
        <Fragment>
            <h2>Crear Citas</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >

            <label>Nombre de la mascota</label>
            <input 
                  type="text"
                  name="mascota"
                  placeholder="Nombre de la mascota"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={mascota}

            />

            <label>Nombre del Dueño/a</label>
            <input 
                  type="text"
                  name="propetario"
                  placeholder="Nombre del Dueño/a"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={propetario}

            />

            
            <label>Fecha</label>
            <input 
                  type="date"
                  name="fecha"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={fecha}
                  

            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea 
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}
            >
            </textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Reservar</button>







            </form>
        </Fragment>

    );
}


export default Formulario