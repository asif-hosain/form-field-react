const ReUsableForm = ({formTitle,handleSubmit ,submitBtnText= 'submit',children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            
        }
        handleSubmit(data);
    } 

    // const handleSubmit = e =>{
    //     e.preventDefault();
    // }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input  type="text" name="name" />
                <br />
                <input  type="email" name="email" />
                <br />
                <input  type="password" name="password" required />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUsableForm;