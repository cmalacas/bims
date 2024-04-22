import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    { children }
                    <div className="login100-more" style={{ backgroundImage: 'url("/images/amec-bldg.png")' }}></div>
                </div>
            </div>
        </div>
    );
}
