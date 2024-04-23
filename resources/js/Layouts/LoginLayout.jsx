import React from 'react';

export default function Login({ children }) {
    return (
        <div className="login">
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        { children }
                        <div className="login100-more" style={{ backgroundImage: 'url("/images/amec-bldg.png")' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
