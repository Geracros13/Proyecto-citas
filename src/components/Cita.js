import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <h3>Datos del paciente</h3>
        <p>Nombres: <span>{cita.nom_paciente}</span></p>
        <p>Apellidos: <span>{cita.ape_paciente}</span></p>
        <p>DPI: <span>{cita.dpi_paciente}</span></p>
        <p>Fecha Ingreso: <span>{cita.fecha}</span></p>
        <p>Hora Ingreso: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) } //La colocamos asi, para que espere a que suceda el onClick
        >Eliminar Cita</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;