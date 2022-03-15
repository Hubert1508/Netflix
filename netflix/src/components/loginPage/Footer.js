import React from 'react';
import './footer.css';

function Footer(){

    const changeLanguage = ()=>{

        const option = document.querySelector('.select-lang').value;

        if(option==="/?locale=pl-PL"){

            alert("Polski");

        }
        else if(option==="/?locale=en-PL"){

            alert("English");

        }
    }

    return(
        <div className='footerDiv'>

            <p className='nr-tel'>Pytania? Zadzwoń pod numer 00 800 112 4392</p>

            <div className='footer-link'>
                <a href='https://help.netflix.com/pl/node/412'><p>Często zadawane pytania</p></a>
                <a href='https://help.netflix.com/pl/'><p>Centrum pomocy</p></a>
            </div>

            <div className='footer-link'>
                <a href='https://help.netflix.com/legal/termsofuse'><p>Warunki korzystania</p></a>
                <a href='https://help.netflix.com/legal/privacy'><p>Prywatność</p></a>
            </div>

            <div className='footer-link'>
                <a href='#'><p>Ustawienia plików cookie</p></a>
                <a href='https://help.netflix.com/legal/corpinfo'><p>Informacje o firmie</p></a>
            </div>

            <select onChange={changeLanguage} className='select-lang' placeholder="lang-switcher">
                <option lang="pl" value="/?locale=pl-PL" data-language="pl">Polski</option>
                <option lang="en" value="/?locale=en-PL" data-language="en">English</option>
            </select>
            
        </div>
    );

}

export default Footer;