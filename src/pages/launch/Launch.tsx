import React from 'react';
// import { Link } from 'react-router-dom';
import FHIR from "fhirclient"

// export type LaunchProps={
//   onLaunchClick : ()=> void
// }



function Launch() {


  // Función para manejar la autorización OAuth2
 const handleAuthorization = async () => {
  // Objeto de configuración para la autorización
  const authorizationConfig = {
    clientId: 'myClientId',
    scope: 'patient/*.read',
    redirect_uri: '/auth/login',
    iss: 'http://localhost:8090/fhir'
    // Otros parámetros de configuración OAuth2 si es necesario
  };

  try {
    // Llamada a la función FHIR.oauth2.authorize con la configuración
    const response = await FHIR.oauth2.authorize(authorizationConfig);

    // Store the authorization response in local storage
    localStorage.setItem('fhirAuthorization', JSON.stringify(response));

    // Use the ready function to obtain a Client instance for querying the FHIR server
    const client = await FHIR.oauth2.ready();

    // Now you can use the 'client' instance to make FHIR queries
    const patient = await client.request("/Patient").then(res => res.json());
            
    console.log("Patient: ", patient);

    // Redirige a la página de inicio de sesión
    // window.location.href = '/auth/login';
  } catch (error) {
    // Maneja cualquier error de autorización aquí
    console.error('Authorization error', error);

    // Puedes mostrar un mensaje de error o realizar otras acciones
  }
};

  return (
    <div className= "flex flex-col h-auto w-auto items-center  my-auto justify-center">
      {/* Your Launch component content */}
      <div className="border-2 p-8 flex flex-col items-center">

      <h2>Launch Component</h2>
      <div
      className='border-2 group w-auto '
      // to={'/auth/login'} 
      onClick={handleAuthorization}
      ><p className='transition-all underline hover:text-red-500 text-slate-700 transform group-hover:scale-105 border-2 border-green-500   ease-in-out' >Al hacer click acepta los terminos de uso y tratamiento de datos de la app</p>
      </div>
      </div>
    </div>
  );
}

export default Launch;
