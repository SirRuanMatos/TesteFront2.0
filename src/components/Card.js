import React from 'react';

export default function Card({ label, userKey }) {
    if (typeof (label) === "object") {
        label = ""
    }

    return (
        <>
            <div className="col s6">
                <div className="card blue-grey darken-1" style={{ minHeight: 160 + 'px' }}>
                    <div className="card-content white-text">
                        <span className="card-title">{userKey}</span>
                        <p>{label}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
