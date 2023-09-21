import useInputState from "./useInputState";

const HookForm = () => {
    // const [name,handleNameChange]= useInputState('name')

    const emailState = useInputState('name@example.com')
    const handleSubmit = e =>{
        console.log('form fata',emailState.value)
        e.preventDefault();
        
    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;