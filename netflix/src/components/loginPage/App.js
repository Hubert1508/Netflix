import React from 'react';
import './app.css';

function App() {

    const logInFunction = () =>{

      const userId = document.querySelector('#user').value;

      const pass = document.querySelector('#password').value;

      if(userId===''&&pass===''){

        document.querySelector('#wrongUser').innerHTML = 'Wpisz adres e-mail, lub numer telefonu';

        document.querySelector('#wrongPass').innerHTML = 'Hasło musi mieć długość od 4 do 60 znaków';

      }else if(pass.length < 4 || pass.length > 60){

        document.querySelector('#wrongPass').innerHTML = 'Hasło musi mieć dlugość od 4 do 60 znaków';

      }else if(userId==='hubert11nowak@gmail.com' && pass==='Nowak'){

        alert("Zalogowano " + userId);

        document.querySelector('#user').value = '';

        document.querySelector('#password').value = '';

        document.querySelector('#wrongUser').innerHTML = '';

        document.querySelector('#wrongPass').innerHTML = '';

      }
      
    }


    return (
      <div className='backgroundDiv'>

        <h1>Netflix</h1>

        <div className='loginSection'>

          <h2>Zaloguj się</h2>

          <input id='user' className='loginInput' type='text' placeholder='E-mail lub numer telefonu'></input>
            <p id='wrongUser'></p>

          <input id='password' className='loginInput' type='password' placeholder='Hasło'></input>
            <p id='wrongPass'></p>

          <input onClick={logInFunction} className='buttonLogin' type='button' value='Zaloguj się'></input>

          <label className='check'>

            <input className='checkbox' type='checkbox'/>

            <span className='rememberMe'>Zapamiętaj mnie</span>

          </label>

          <span className='question'>Nie masz jeszcze konta w serwisie Netflix?</span>
            <a className='signUp' href='https://www.netflix.com/pl/'>ZAREJESTRUJ SIĘ</a>

          <span className='help'><a href='https://www.netflix.com/pl/LoginHelp'>Potrzeujesz pomocy?</a></span>

        </div>

      </div>
    );
  }  

  export default App;