import React from 'react';

const CardBase = ({ title, headerSlot, body, footer, status, className, onClick }) => {
    // Determine the status icon and border color based on the status prop
    const statusIcon = () => {
        switch (status) {
            case 'good':
                return <i className="fa-solid fa-circle-check text-green-500"></i>;
            case 'low':
                return <i className="fa-solid fa-circle-exclamation text-yellow-500"></i>;
            case 'alert':
                return <i className="fa-solid fa-bell text-red-500"></i>;
            default:
                return null;
        }
    };

    const borderColor = () => {
        switch (status) {
            case 'good':
                return 'border-green-500';
            case 'low':
                return 'border-yellow-500';
            case 'alert':
                return 'border-red-500';
            default:
                return 'border-gray-300'; // Default border color
        }
    };

    return (
        <div className={`bg-white border rounded-lg shadow-lg overflow-hidden border-2 ${borderColor()} ${className}`} onClick={onClick}>
            {/* Header */}
            <div className="border-b border-gray-300 h-12 flex items-center justify-between px-4">
                <span className="flex flex-row items-center gap-2">
                    {statusIcon()}
                    <h3 className="font-bold truncate flex-grow">{title}</h3>
                </span>
                {headerSlot}
            </div>

            {/* Body */}
            <div className="p-3">
                {body}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-300 h-12 flex items-center justify-between pl-2 pr-5">
                {footer}
            </div>
        </div>
    );
};

export default CardBase;
