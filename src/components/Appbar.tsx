import React from 'react';

export default function Appbar() {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img width={32} src="/logo.png" />&nbsp;
                    <span className="font-semibold text-xl tracking-tight text-center">TourQuest</span>
                </div>
            </nav>
        </div>
    );
}