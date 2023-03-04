import React, { useState } from 'react';
import axios from 'axios'

function MyForm(props) {
  const [formData, setFormData] = useState({
    test: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        axios.post("http://localhost:4000/post_test", {
        test: formData.test
      })

    }catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="test" name="test" value={formData.test} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;