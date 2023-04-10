import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-sm-3 text-center'>
                        <h6>
                        <Link to='/home' className='footer-link'>Home</Link>
                        </h6>
                    </div>
                    <div className='col-sm-3 text-center'>
                        <h6>
                        <Link to='/aboutus' className='footer-link'>About us</Link>
                        </h6>
                    </div>
                    <div className='col-sm-3 text-center'>
                        <h6>
                        <Link to='/menu' className='footer-link'>Menu</Link>
                        </h6>
                    </div>
                    <div className='col-sm-3 text-center'>
                        <h6>
                        <Link to='/contactus' className='footer-link'>Contact us</Link>
                        </h6>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;