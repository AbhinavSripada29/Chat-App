import React from 'react';
import './detail.css';
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Gajala</h2>
        <p>From Washington DC, Sonic Solutions</p>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Setting</span>
              <img src="./arrowUp.png" alt="Arrow Up" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="Arrow Up" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowUp.png" alt="Arrow Up" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://www.pbs.org/wnet/nature/files/2023/07/pexels-pixabay-160583-scaled-e1689259491194.jpg"
                    alt="Capybara"
                  />
                  <span>Capy.png</span>
                </div>
                <img src="./download.png" alt="Download" className='icon' />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://www.pbs.org/wnet/nature/files/2023/07/pexels-pixabay-160583-scaled-e1689259491194.jpg"
                    alt="Capybara"
                  />
                  <span>Capy.png</span>
                </div>
                <img src="./download.png" alt="Download" className='icon' />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://www.pbs.org/wnet/nature/files/2023/07/pexels-pixabay-160583-scaled-e1689259491194.jpg"
                    alt="Capybara"
                  />
                  <span>Capy.png</span>
                </div>
                <img src="./download.png" alt="Download" className='icon' />
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="Arrow Up" className="icon" />
            </div>
            <button className='block-button'>Block User</button>
            <button className='logout' onClick={()=>auth.signOut()} >Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
