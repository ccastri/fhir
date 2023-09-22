import React from 'react';
import { Link } from 'react-router-dom';
import FHIR from "fhirclient"

// export type LaunchProps={
//   onLaunchClick : ()=> void
// }



function Launch() {


  // Función para manejar la autorización OAuth2
  const handleAuthorization = () => {
    // Objeto de configuración para la autorización
    const authorizationConfig = {
      clientId: 'myClientId',
      scope: 'patient/*.read',
      redirect_uri: '/auth/login',
      iss: 'http://localhost:8090/fhir'
      // Otros parámetros de configuración OAuth2 si es necesario
    };

    // Llamada a la función FHIR.oauth2.authorize con la configuración
   FHIR.oauth2
    .authorize(authorizationConfig)
    .then((response) => {
      // Store the authorization response in local storage
      localStorage.setItem('fhirAuthorization', JSON.stringify(response));

      // Redirect to the login page
      // window.location.href = '/auth/login';
    })
      .catch((error) => {
        // Maneja cualquier error de autorización aquí
        console.error('Authorization error', error);

        // Puedes mostrar un mensaje de error o realizar otras acciones
      });
  };
  return (
    <div className= "flex flex-col h-auto w-auto items-center  my-auto justify-center">
      {/* Your Launch component content */}
      <div className="border-2 p-8 flex flex-col items-center">

      <h2>Launch Component</h2>
      <Link
      className='border-2 group w-auto '
      to={'/auth/login'} 
      onClick={handleAuthorization}
      ><p className='transition-all undeline hover:text-red-500 text-slate-700 transform group-hover:scale-105 border-2 border-green-500   ease-in-out' >Al hacer click acepta los terminos de uso y tratamiento de datos de la app</p></Link>
      </div>
    </div>
  );
}

export default Launch;
