import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'; 
import Cita from './components/Cita';

function App() {

  //Citas en el local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }


  //Arreglo de todas las Citas para listarlas
  const [citas, guardarCitas] = useState(citasIniciales);


  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );



  //Funcion que tome las citas actuales y agrege la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  };

  //Funcion eliminar cita
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id );//La razon por la que colocamos !== es para que me traiga todas las citas, menos la de ese id, y se elimina
    guardarCitas(nuevasCitas);
  };

  //Mensaje que aparecera cuando hay y cuando no hay citas
  const titulo = citas.length === 0 ? 'No hay citas para hoy': 'Adiministra tus Citas';


  return (

    <Fragment>
      <h1>Administrador de Citas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita={crearCita}
            />
          </div> 
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key= {cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}

          </div>
        </div>
      </div>


    </Fragment>

  );
}

export default App;
