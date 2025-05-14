import React, { useState } from "react";

function FeedbackForm() {
//object to hold all form data
    const [formData, setFormData] = useState({ 
        name: "",
        email: "",
        feedback: "",
    });

//function to handle changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


//disabling submit button if there are any empty fields    
const isFormIncomplete = !formData.name || !formData.email || !formData.feedback;


const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback Submitted');

    setFormData({
        name: '',
        email: '',
        feedback: ''
    })
}


return (
<>
<div className="form">
    <h1>Feedback Form</h1>

    <form onSubmit={handleSubmit}>

    
      <label> Name:  </label> 
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}/> 

    <br /> <br />
      
    
      <label>Email: </label>  
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /> 
        
    
        <br />
        <br />

    
        <label> Feedback: <br /></label>
        <textarea style={{width: 250}}
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        maxLength={200} />
        <br />
        <span style={{fontSize: 14}}>{formData.feedback.length}/200 Characters</span>
  <br /><br />

        <button className = "submit-button" type="submit" 
        disabled={isFormIncomplete}>
          Submit
        </button>
    
    </form>

    <br />
{/* PREVIEW BOX */}
<div className="preview-container">
    <div className = "preview-box">
        <h3 style={{textAlign: "center"}}>Preview</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback:{formData.feedback}</p>
    </div>
</div>
</div>     
</>


    );
}

export default FeedbackForm
