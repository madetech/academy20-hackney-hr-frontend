// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AllEmployees from '../allEmployeesPage/allEmployees';
// import "./employeeDetails.css";
// import StartButton from "../../components/startButton/startButton";
// let users = require("../../MOCK_DATA.json")
// import Details from "../../components/details/details";

// export default function EmployeeDetails(props) {
//     // const [firstName, setFirstName] = useState('');
//     // const [surname, setSurname] = useState('');

//     // const [jobTitle, setJobTitle] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [salary, setSalary] = useState('');
//     // const [office, setOffice] = useState('');

//     // const [streetAddress, setStreetAddress] = useState('');
//     // const [postcode, setPostcode] = useState('');

//     // const [kinFirstName, setKinFirstName] = useState('');
//     // const [kinLastName, setKinLastName] = useState('');

//     // useEffect(() => {
//     //     const user = users.find(user => user.id === props.id);
//     //     if (user) {
//     //         setFirstName(user.first_name);
//     //         setSurname(user.surname);
//     //         setJobTitle(user.job_title);
//     //         setEmail(user.email);
//     //         setSalary(user.salary);
//     //         setOffice(user.office_location);
//     //         setStreetAddress(user.street_address);
//     //         setPostcode(user.postcode);
//     //         setKinFirstName(user.next_of_kin_first_name);
//     //         setKinLastName(user.next_of_kin_last_name);
//     //     }
//     // }, [props.id]);

//     // let userInfo = null;
//     // if(firstName && surname && jobTitle && email && salary && office && streetAddress && postcode && kinFirstName && kinLastName) {
//     //     userInfo = (
//     //         <div>
//     //             <p>Name: {firstName} {surname}</p>  
//     //             <p>Job title: {jobTitle}</p>
//     //             <p>Email: {email}</p> 
//     //             <p>Salary: {salary}</p> 
//     //             <p>Office: {office}</p>
//     //             <p>Contact information: <br/>{streetAddress}
//     //             <br/>{postcode}</p>
//     //             <p>Next of Kin: {kinFirstName} {kinLastName}</p> 
//     //         </div> 
//     //     )
//     // }

//     return(
//         <div>
//             <Router>
//                 <Switch>
//                          <Route exact path="/all-employees" component={AllEmployees}/>
//                         <section>
//                             {/* <div className="welcome-text">
//                                 <Link to="/all-employees">
//                                     <StartButton text="See All Employees"/>
//                                 </Link>
//                                 <h1>Employee Details</h1>
//                                 <p>Name: {users[0].first_name} {users[0].last_name}</p>  
//                                 <p>Job title: {users[0].job_title}</p>
//                                 <p>Email: {users[0].contact_email}</p> 
//                                 <p>Salary: {users[0].salary}</p> 
//                                 <p>Office: {users[0].office_location}</p>
//                                 <p>Contact information: <br/>{users[0].street_address}
//                                     <br/>{users[0].postcode}</p>
//                                 <p>Next of Kin: {users[0].next_of_kin_first_name} {users[0].next_of_kin_last_name}</p>
//                             </div> */}
//                             <Details/>
//                         </section>
//                 </Switch>
//             </Router>
//         </div>
//     )
// }