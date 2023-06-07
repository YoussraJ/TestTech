import React from 'react';
import astronaute from '../assets/astronaute.png';
import imag from '../assets/imag.png';
import writer from '../assets/writer.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
    <div className="container">
        <div className="body">
            <div className="news">
            <div className="astronaute"><img src={astronaute} alt="astraunote_image" /></div>
                <div className="title">

                    <h1>Latest news </h1>
                    <span>Updates</span>
                </div>
            </div>
        </div>
        <div className="content"> 
          <img src={imag} alt="imag_workshop"className='workshop'></img>
          <div className='parag'>
           <h2>Lorem Ipsum is simply dummy text of the printing </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime libero alias doloremque iste vel mollitia. Nam non reprehenderit molestias omnis. Beatae consequatur error quaerat veritatis quas sint autem at similique!</p>
           <div className='writer'>
            <div><img src={writer} alt="the_writer"/></div>
             <p><strong>Name here</strong><br/><span>20.12.2020</span></p>
           </div>
          </div>
        </div>
       </div> 
  </div>  
  )
}
