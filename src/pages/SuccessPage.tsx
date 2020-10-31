import React from 'react';
import Appbar from '../components/Appbar';

export default function SuccessPage() {

    return (
        <div>
            <Appbar />
            <div className="flex h-screen">
                <div className="m-auto">
                    <h3>Quest Completed</h3>
                    <button>button</button>
                </div>
            </div>
        </div>
    );

}