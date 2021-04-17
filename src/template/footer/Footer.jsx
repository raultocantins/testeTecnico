import React from 'react'
import './Footer.css'
import Copyright from '../../assets/copyright.svg'
export default function Footer(){
    return(
        <div className="footer">
            <div className="infor">
<img src={Copyright} alt="information"/>
            </div>
            <div className="copyright">
                
            </div>
        </div>
    );

}