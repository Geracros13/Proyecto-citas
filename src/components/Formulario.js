import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'; //Esta es la libreria que instalamos (npm uuid) para generar un id aleatorio
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        nom_paciente: '',
        ape_paciente: '',
        dpi_paciente: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Crear State para validar los inputs
    const [error, actualizarError] = useState(false);


    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };


    //Extraer los valores de mi objeto y del formulario
    const { nom_paciente, ape_paciente, dpi_paciente, fecha, hora, sintomas } = cita;

    //Cuando se envie el form
    const submitCita = e =>{
        e.preventDefault(); //Para prevenir el evento por defecto del form que antes enviava el form por el metodo get

        //Validar si el usuario ingreso valores en todos los inputs
        if (nom_paciente.trim() === '' || ape_paciente.trim() === '' || dpi_paciente.trim() === '' || fecha.trim() === '' ||
         hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
            
        }

        //Eliminar el mensaje de error si el usuario queria enviar un input vacio
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();//Para que se me genere un id aleatorio

        //Crear la cita
        crearCita(cita);

        //Reiniciar el Form una vez enviado
        actualizarCita({
            nom_paciente: '',
            ape_paciente: '',
            dpi_paciente: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });




    } 

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios :(</p>: null}

            <form
                onSubmit={submitCita}
                autoComplete='off'
            >
                <h4>Datos del Paciente</h4>
                <label>Nombres</label>
                <input
                    type="text"
                    name="nom_paciente"
                    className="u-full-width"
                    placeholder="Nombres"
                    onChange={actualizarState}
                    value={nom_paciente}
                />
                <label>Apellidos</label>
                <input
                    type="text"
                    name="ape_paciente"
                    className="u-full-width"
                    placeholder="Apellidos"
                    onChange={actualizarState}
                    value={ape_paciente}
                />
                <label>Documento de Identificación</label>
                <input
                    type="text"
                    name="dpi_paciente"
                    className="u-full-width"
                    placeholder="DPI"
                    onChange={actualizarState}
                    value={dpi_paciente}
                />
                <h4>Datos de Ingreso</h4>
                <label>Fecha de Ingreso</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora de Ingreso</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            
            </form>



        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;