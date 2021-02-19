import './App.css';

function SecretComponent() {
  return <h1>Secret Component</h1>
}

function RegularComponent() {
  return <h1>Regular Component</h1>
}

function App({authorized}) {
  return (
    <>
  {authorized ? <SecretComponent /> : <RegularComponent />}
  </>
  )
}

export default App;
