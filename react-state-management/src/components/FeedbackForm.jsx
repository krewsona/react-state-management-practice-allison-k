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
}


return (
<>

    <h1>Feedback Form</h1>

    <form onSubmit={handleSubmit}>

    <div className = "name-input">
      <label> Name:<br /> </label> 
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}/> 

    </div> 
      
    <div className = "email-input">
      <label>Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /> </label>
        
    </div> 
        <br />

    <div className = "feedback-input">
        <label> Feedback:</label>
        <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        maxLength={200} />
        <br />

      {formData.feedback.length}/200 Characters Remaining
    </div>

        <button className = "submit-button" type="submit" 
        disabled={isFormIncomplete}>
          Submit
        </button>
    
    </form>


{/* PREVIEW BOX */}
<div className="preview-container">
    <div className = "preview-box">
        <h3 style={{textAlign: "center"}}>Preview</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
    </div>
</div>     
</>


    );
}

export default FeedbackForm
