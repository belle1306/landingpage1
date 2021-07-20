import React, {useState} from 'react';

const Form = props => {

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    occupation: '',
    contact:'',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value});
  };

  const handleSubmit = (event) => {
    alert("Thank you for contacting us")
    event.preventDefault();
    setUser({
      name: '',
      email: '',
      occupation: '',
      contact:'',
      message: ''
    });
  };

  return (
    <div className='contact-container bg-grey'>
    <div id='sect1'>
    <span></span>
    <span className="div-title">Contact us</span>
    <div className='contact-form'></div>    
    <form className="contact-form" onSubmit={(event) => handleSubmit(event)}>
    <div id='sect2'>
      <span>   
      <label>
        Name:
        <input
          onChange={(event) => handleChange(event)}
          name="name"
          type="text"
          value={user.name}
         />

      </label>
      </span>
    </div>
    <div id= 'sect2'>
    <span>
     <label>
       E-Mail:
       <input
         onChange={(event) => handleChange(event)}
         name="email"
         type="email"
         value={user.email}
       />
     </label>
     </span>
     </div>
     {/* <div id= 'sect2'>
     <span>     
     <label>
       Occupation:
       <input
         onChange={(event) => handleChange(event)}
         name="occupation"
         type="text"
         value={user.occupation}
       />
     </label>
     </span>     
     <div id= 'sect2'>
     
     <label>
       Contact:
       <input
         onChange={(event) => handleChange(event)}
         name="contact"
         type="text"
         value={user.contact}
       />
     </label>
     
     </div> */}
     <div id= 'sect2'>
     <label>
       Message:
       <textarea
         onChange={(event) => handleChange(event)}
         name="message"
         value={user.message}
         type="textarea" 
         maxLength = "500"
         width = "100"
         placeholder="type your message here"
       />
       
     </label>
     </div>
     <button className="contact-btn">Submit!</button>
     
   </form>

   
   </div>
                   
   </div>              
   
   
  )
}


      
    

    

export default Form;
