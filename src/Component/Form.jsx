import React from 'react';
import './Form.css';

const Form = ({ formType }) => {
  return (
    <form action={formType === 'submit' ? '/submit' : '/edit'}>
      <div className='form'>
        <h1>{formType === 'submit' ? 'Submit Form' : 'Edit Form'}</h1>
        <input type="text" placeholder='Enter a Title' />
        <input type="text" placeholder='Enter a Sub Title' />
        <input type="file" />
        <textarea placeholder='Enter your text here'></textarea>
        {formType === 'submit' && (
          <>
            <button type="submit">Submit</button>
            <button type="edit">Edit</button>
          </>
        )}
        {formType === 'edit' && (
          <button type="submit">Submit</button>
        )}
      </div>
    </form>
  );
};

export default Form;
