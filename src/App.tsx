// import { useState } from 'react'
// import { Patient } from 'fhirclient/lib/Resource/Patient';
// import { Client, FHIRConfig, Patient } from 'fhirclient';

// import { ChangeEvent, useState, useEffect} from 'react';
import './App.css'
import Launch from './pages/launch/Launch';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Client from 'fhirclient/lib/Client';
// export type IPeriod = {
//   start : string,
//   end: string
// }

// export type IContactPoint = {
  //   // from Element: extension
  //   system : 'phone'|'fax'|'email'|'pager'|'url'|'sms' , // I phone | fax | email | pager | url | sms | other
//   value : string, // I The actual contact point details
//   use : 'home'| 'work' |'temp'| 'old'| 'mobile', // home | work | temp | old | mobile - purpose of this contact point
//   rank : number, // Specify preferred order of use (1 = highest)
//   period :  IPeriod  // Time period when the contact point was/is in use
// }
// export type IPatient={
// resourceType:string,
// identifier:string[],
// active: boolean,
// name: string[] // HumanName would fall under diferent FHIR types like: name, given, fullName and so ...
// telecom:IContactPoint[]
// }
function App() {
  //   // const [count, setCount] = useState(0)
  //   {
    //   "resourceType" : "Patient",
    //   // from Resource: id, meta, implicitRules, and language
    //   // from DomainResource: text, contained, extension, and modifierExtension
    // const [patient, setPatient] = useState(null);
    // const [error, setError] = useState(null);
    // const [dateTime, setDateTime] = useState('');
    // const [isValid, setIsValid] = useState(true);

//  useEffect(() => {
//    // Realiza la solicitud GET al servidor backend en Docker
//    fetch('http://localhost:8090/fhir/Patient/fe9eba1a-50c0-4e9f-8fa1-fbeaa921e980')
//      .then((response) => {
//        if (!response.ok) {
//          throw new Error('La solicitud no pudo ser completada.');
//        }
//        return response.json();
//      })
//      .then((data) => {
//        setPatient(data);
//      })
//      .catch((err) => {
//        setError(err.message);
//      });
//  }, []);

//  if (error) {
//    return <div>Error: {error}</div>;
//  }

//  if (!patient) {
//    return <div>Cargando...</div>;
//  }


 // const client = new Client({ baseUrl: 'http://localhost:5173' });
// const dateTimeRegex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]{1,9})?)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)?)?)?)?$/;

    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   const newValue = e.target.value;
    //   setDateTime(newValue);

    //   // Validate against the regex
    //   setIsValid(dateTimeRegex.test(newValue));

    // };

    
  return (
    <>
       <Router>
     <h1 className="bg-red-500"> Create a new Patient:</h1>
     <Routes>
      
      <Route path="/" element={<Navigate to="/launch" />} />
      <Route  path="/launch" element={<Launch/>} />
      <Route  path="/auth/login" element={<Login/>} />
      {/* <Route exact path="/" component={HomePage} /> */}
     </Routes>
    </Router>
         {/* <div>
      <h1>Información del Paciente</h1>
      <p>Nombre: {patient.name[0].given[0]} {patient.name[0].family}</p>
      <p>Fecha de Nacimiento: {patient.birthDate}</p>
      <p>Dirección: {patient.address[0].line[0]}, {patient.address[0].city}, {patient.address[0].state}</p>
      <p>Teléfono: {patient.telecom[0].value}</p>
      <p>Correo Electrónico: {patient.telecom[1].value}</p>
    </div> */}
     {/* <div className="flex flex-col border-2 w-full space-y-6  ">
      <input type="text" placeholder="Name" className='border-2 w-64'/>
      <input type="text" placeholder="Name" className='border-2 w-64'/>
      <input type="text" placeholder="Name" className='border-2 w-64'/>
      <input type="text" placeholder="Name" className='border-2 w-64'/> */}
    {/* <input
    type="text"
    value={dateTime}
    onChange={handleInputChange}
    style={{ borderColor: isValid ? 'inherit' : 'red' }}
  />
  {!isValid && (
    <p style={{ color: 'red' }}>Invalid FHIR DateTime format. Please use the format: YYYY-MM-DDThh:mm:ss+zz:zz</p>
  )} */}
{/* </div> */}
      {/* <p></p> */}
    </>
  )
}

export default App




//   "identifier" : [{ Identifier }], // An identifier for this patient
//   "active" : <boolean>, // Whether this patient's record is in active use
//   "name" : [{ HumanName }], // A name associated with the patient
//   "telecom" : [{ ContactPoint }], // A contact detail for the individual
//   "gender" : "<code>", // male | female | other | unknown
//   "birthDate" : "<date>", // The date of birth for the individual
//   // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
//   "deceasedBoolean" : <boolean>,
//   "deceasedDateTime" : "<dateTime>",
//   "address" : [{ Address }], // An address for the individual
//   "maritalStatus" : { CodeableConcept }, // Marital (civil) status of a patient
//   // multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
//   "multipleBirthBoolean" : <boolean>,
//   "multipleBirthInteger" : <integer>,
//   "photo" : [{ Attachment }], // Image of the patient
//   "contact" : [{ // A contact party (e.g. guardian, partner, friend) for the patient
//     "relationship" : [{ CodeableConcept }], // The kind of relationship
//     "name" : { HumanName }, // I A name associated with the contact person
//     "telecom" : [{ ContactPoint }], // I A contact detail for the person
//     "address" : { Address }, // I Address for the contact person
//     "gender" : "<code>", // male | female | other | unknown
//     "organization" : { Reference(Organization) }, // I Organization that is associated with the contact
//     "period" : { Period } // The period during which this contact person or organization is valid to be contacted relating to this patient
//   }],
//   "communication" : [{ // A language which may be used to communicate with the patient about his or her health
//     "language" : { CodeableConcept }, // R!  The language which can be used to communicate with the patient about his or her health
//     "preferred" : <boolean> // Language preference indicator
//   }],
//   "generalPractitioner" : [{ Reference(Organization|Practitioner|
//    PractitionerRole) }], // Patient's nominated primary care provider
//   "managingOrganization" : { Reference(Organization) }, // Organization that is the custodian of the patient record
//   "link" : [{ // Link to a Patient or RelatedPerson resource that concerns the same actual individual
//     "other" : { Reference(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
//     "type" : "<code>" // R!  replaced-by | replaces | refer | seealso
//   }]
// 