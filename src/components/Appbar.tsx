import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Appbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <Link to="/">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img width={32} src="/logo.png" alt="Logo" />&nbsp;
                    <span className="font-semibold text-xl tracking-tight text-center">TourQuest</span>
                    </div>
                </Link>
                <div>
                    {
                        drawerOpen ?
                            <MdClose size={32} color="white" onClick={toggleDrawer} />
                            :
                            <MdMenu size={32} color="white" onClick={toggleDrawer} />
                    }
                </div>
                {
                    drawerOpen &&
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <div className="divide-y divide-gray-400">
                                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/" onClick={toggleDrawer}>
                                    Map
                            </Link>
                                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/profile" onClick={toggleDrawer}>
                                    Profile
                            </Link>
                                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/redeem" onClick={toggleDrawer}>
                                    Redeem
                            </Link>
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </div>
    );
}