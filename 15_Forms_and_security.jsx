////////////////////////////////////////////////////////////////////////////////
// Forms & Security ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//  WIP secure forms in React.

import { useState } from "react"
export const MyForm = () => {
    // Handling each input separately.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleFirstName = (e) => {
    setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
    setLastName(e.target.value)
    }

    // Handling all the inputs all at once in an object.
    /*
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    */

    // Handle Form on Submit
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents default behaviour i.e. form submit.
        console.log("Submit Button Clicked", formData);
        // Send the API request to the server.
    }
    return (
        <>
            <form action="" onSubmit={handleFormSubmit}>
                {/* Handle element one by one */}
                First Name: <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
                <br /><br />
                Last Name: <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
                <br /><br />

                {/* Handle all elements at once */}
                {/*
                    First Name: <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /> <br /><br />
                    Last Name: <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /> <br /><br />
                */}

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
