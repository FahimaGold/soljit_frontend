
import axios from 'axios';
import { useCandidateForm } from '../hooks/useSalesForceData';
export  default function CandidateForm({accessToken}){
    const submitForm = async (values) => {
        try {
          await axios.post('http://localhost:3000/candidacy/add', values,  {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }});
          alert('Candidate record inserted successfully!');
        } catch (error) {
          console.error('Error inserting candidate record:', error);
          alert('Error inserting candidate record. Please try again.');
        }
      };
    
      const { values, handleChange, handleSubmit } = useCandidateForm(submitForm);
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstname" value={values.firstname || ''} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="lastname" value={values.lastname || ''} onChange={handleChange} placeholder="Last Name" required />
          <input type="number" name="yearOfExperience" value={values.yearOfExperience || ''} onChange={handleChange} placeholder="Year of Experience" required />
          <button type="submit">Add Candidate</button>
        </form>
      );
}