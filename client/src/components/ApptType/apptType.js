import React from 'react';
import "./style.css";

export function ApptType ({children}) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

