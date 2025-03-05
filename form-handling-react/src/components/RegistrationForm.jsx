import { useState } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({username:'', email:'', password:'' });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {username, value} = e.target;
        setFormData(prevState => ({ ...prevState, [username]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!username) validationErrors.username = 'Username is required';
        if (!email) validationErrors.email = 'Email is required';
        if (!password) validationErrors.password = 'Password is required';
    
        // Update errors state
        setErrors(validationErrors);
    
        // If no errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
          // Perform form submission logic here
          console.log('Form submitted:', { username, email, password });
        }
      
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />

            <input 
            type="password" 
            name="password"
            value={password}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;