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
        console.log(formData);
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