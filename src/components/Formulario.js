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
    
    //Para validar que solo me escriba numeros en DPI


    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>

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
                    required
                />
                <label>Apellidos</label>
                <input
                    type="text"
                    name="ape_paciente"
                    className="u-full-width"
                    placeholder="Apellidos"
                    onChange={actualizarState}
                    value={ape_paciente}
                    required
                />
                <label>Documento de Identificación</label>
                <input
                    type="number"
                    name="dpi_paciente"
                    className="u-full-width"
                    placeholder="DPI"
                    onChange={actualizarState}
                    value={dpi_paciente}
                    required

                />
                <h4>Datos de Ingreso</h4>
                <label>Fecha de Ingreso</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    required
                />
                <label>Hora de Ingreso</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                    required
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                    required
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