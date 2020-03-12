import React from 'react';

import './Phone.scss';

export const Phone = () => (
  <div className="phone">
    <div className="phone-bg">
      <div className="phone-top">
        <svg width="374" height="83" viewBox="0 0 374 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="374" height="83">
          <path d="M0 50C0 22.3858 22.3858 0 50 0H324C351.614 0 374 22.3858 374 50V83H0V50Z" fill="#C4C4C4"/>
          </mask>
          <g mask="url(#mask0)">
          <path d="M-12 -10H384V24H-12V-10Z" fill="#C4C4C4"/>
          </g>
        </svg>
      </div>
      <div className="phone-btm">
        <svg width="374" height="83" viewBox="0 0 374 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="374" height="83">
          <path d="M374 33.0001C374 60.6143 351.614 83.0001 324 83.0001L50 83C22.3858 83 1.95703e-06 60.6143 4.37114e-06 33L7.25609e-06 2.8339e-05L374 6.10352e-05L374 33.0001Z" fill="#C4C4C4"/>
          </mask>
          <g mask="url(#mask1)">
          <path d="M386 93.0001L-10 93L-10 59L386 59.0001L386 93.0001Z" fill="#C4C4C4"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
)