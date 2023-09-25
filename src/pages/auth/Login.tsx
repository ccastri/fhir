import {useEffect} from 'react'
import axios from 'axios'
// import FHIR from "fhirclient"


const Login = () => {
        const fhirServerBaseUrl = 'http://localhost:8090/fhir'; // Replace with your FHIR server's URL
const patientId = 'fe9eba1a-50c0-4e9f-8fa1-fbeaa921e980'; // Replace with the ID or identifier of the patient you want to retrieve
const patientEndpoint = `${fhirServerBaseUrl}/Patient/${patientId}`;


// const patientData: fhir4.Patient = {
//   resourceType: 'Patient',
//   name: [{ given: ['John'], family: 'Doe' }],
//   gender: 'male',
//   birthDate: '1990-01-01',
//   // Add other patient attributes as needed
// };

// const myApp = {}
//! Registrar la app nuevamente con los links y todo
// const storedAuthorization = localStorage.getItem('fhirAuthorization');
// console.log(storedAuthorization)
// if (storedAuthorization) {
//   const authorizationResponse = JSON.parse(storedAuthorization);

//   FHIR.oauth2
//     .ready(authorizationResponse)
//     .then((client) => {
//       myApp.smart = client;

//       // Now you can use the FHIR client in your login page
//     })
//     .catch((error) => {
//       console.error('FHIR client initialization error', error);
//     });
// }
useEffect(() => {

    axios
    .get(patientEndpoint)
    .then((response  ) => {
        // Handle the successful response here, which may contain patient data
        console.log('Patient data retrieved successfully:', response.data);
    })
    .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error retrieving patient data:', error);
    });
    
}, [patientEndpoint])
    return (
        <>
    
         
        <div className="w-auto p-8">
      <h1 className='w-auto'>Login</h1>
    </div>
        
        </>   
  )
}

export default Login
