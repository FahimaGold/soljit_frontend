import React from 'react';
import axios from 'axios';
import { useUpdateLastNameForm } from '../hooks/useUpdateLastNameForm';

export default function UpdateCandidateLastNameForm({accessToken}){
  const { value, handleChange, handleSubmit } = useUpdateLastNameForm(submitForm);

  async function submitForm(newLastName) {
    try {
      await axios.patch('http://localhost:3000/candidacy/update', {newLastName},  {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }});
      alert('Last name updated successfully!');
    } catch (error) {
      console.error('Error updating last name:', error);
      alert('Error updating last name. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} placeholder="New Last Name" required />
      <button type="submit">Update Last Name</button>
    </form>
  );
};

