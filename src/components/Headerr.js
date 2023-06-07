import React , {useState} from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Headerr.css';

export default function Headerr() {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu ,setShowMenu]=useState(false);

   
        const toggleSearch = () => {
            setShowSearch(!showSearch);
        };

        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };

      const search=()=>{

      }
  return (
    <header>
    <div className="container">
        <nav>
            <img src={logo} alt="logo_Tunsa" /> 
            <div className="links">
                <ul className={`menu ${showMenu ? 'show' : ''}`} >
                    <li><a href="#">home</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">blog</a></li>
                </ul>
                 
                <div className={`search ${showSearch ? 'show' : ''}`}>
              <input type="text" value="" placeholder="Search" onChange={search}/>
              <FontAwesomeIcon
                icon={faSearch}
                className="search-iconn"
              />
            </div>
                  
                
                <div className={`btn ${showSearch ? 'hide' : ''}`}>
                    <button>join us</button>
                    <button className="btn_prio">donate</button>
                </div>
                <div className="searchh" ><FontAwesomeIcon icon={faSearch} className="search-icon"  onClick={toggleSearch}/></div>
                <div className="hamburger" onClick={toggleMenu}> <FontAwesomeIcon icon={faBars}/> </div>
            </div>
            
        </nav>
       

    </div>
</header>
  )
}
