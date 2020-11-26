// import { EditDetails } from '../details/details'

const url = "https://hackney-hr-backend.herokuapp.com/api/employee";
const getState = () => {
  return {
    editContact({ employee }) {
      fetch(url + employee.id, {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: employee.first_name,
          lastName: employee.last_name,
          jobTitle: employee.job_title,
          contactNumber: employee.contact_number,
          contactEmail: employee.contact_email,
          homeAddressLine1: employee.home_address_line_1,
          homeAddressLine2: employee.home_address_line_2,
          homeAddressCity: employee.home_address_city,
          homeAddressPostcode: employee.home_address_postcode,
          salaryBand: employee.salary_band,
          officeLocation: employee.office_location,
          manager: employee.manager,
          reportees: employee.reportees,
          nextOfKinFirstName: employee.next_of_kin_first_name,
          nextOfKinLastName: employee.next_of_kin_last_name,
          nextOfKinContactNumber: employee.next_of_kin_contact_number,
        }),
      }).then(() => {
        (url + employee.id)
          .then((response) => response.json())
          .then((result) => {
            console.log("update", result);
          })
          .catch((e) => console.error(e));
      });
    },
  };
};

export default getState;