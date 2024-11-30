import React from 'react'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import '@mantine/core/styles.css';


function App() {
    const handleSignupSubmit = (data) => {
      console.log(data)
        console.log('Form data:', data);
    }
  return (
    <div>
      <Signin/>
      <Signup onSubmit={handleSignupSubmit}/>
    </div>
  )
}


export default App