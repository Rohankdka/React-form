import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <input type="text" placeholder='Enter a Title' />
        <input type="text" placeholder='Enter a Sub Title' />
        <input type="file" />
        <input type="text area" />
        <button>Submit</button>
    </div>
  )
}

export default Form
