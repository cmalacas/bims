import React, { useState } from 'react';
import Topbar from '@/Components/Topbar';
import Sidenav from '@/Components/Sidenav';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="app-wrapper">
            <Topbar  />
            <Sidenav />
            <main className="app-main">
                <div className="app-content-header">
                    <div className="container-fluid">
                        <div>{ children }</div>
                    </div>
                </div>               
            </main>            
        </div>
    );
}
