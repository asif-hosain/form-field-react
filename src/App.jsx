import './App.css'
import ReUsableForm from './components/ReUsableForm/ReUsableForm'
// import HookForm from './Hooks/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data => {

    console.log('update profile', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }


  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>Sign Up</div>
        <p>Please Sign Up Right Now</p>
      </ReUsableForm>
      <ReUsableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update' >
          <div>
            <h2>Update profile</h2>
            <p>Always keep Your Profile Update</p>
          </div>
      </ReUsableForm>

    </>
  )
}

export default App
