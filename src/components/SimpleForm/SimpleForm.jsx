import { useState } from "react";

const SimpleForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        if (pass.length < 6) {
            setError('Password must be 6 characters or longer');
        }
        else {
            console.log(name, email, pass);
        }

    }
    const handleNameChange = e => {

        setName(e.target.value)
    }
    const handleEnailChange = e => {

        setEmail(e.target.value)
    }
    const handlePassChange = e => {

        setPass(e.target.value)
    }

    return (
        <div>
            {
                error && <p>{error}</p>
            }

            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEnailChange} type="email" name="email" />
                <br />
                <input onChange={handlePassChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;