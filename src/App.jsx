import './App.css';
//* import { MyFirstComponent } from './components/MyFirstComponent';
//* import { SecondComponent } from './components/SecondComponent';
//* import { ThirdComponent } from './components/ThirdComponent';
import { Child } from './components/Child';
import { useState } from 'react';

function App() {

  const [name, setName] = useState ("Juan Carlos Parra");  //Hook de estado

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr'/>
     {/*   <MyFirstComponent />
        <hr className='white-hr'/>
        <SecondComponent />
        <hr className='white-hr'/>
        <ThirdComponent
          name="Juan"
          last_name="Parra"
          age="40"
        /> */}
        <hr className='white-hr'/>
        < Child
          name = {name}
          setName = {setName}
           />
        <hr className='white-hr'/>


        <hr className='white-hr'/>
      </header>
    </div>
  )
};

export default App