import React from 'react';
import Avatar from '../images/avatar.jpg';

export default function Header() {
    return (
            <div className="header">
                    <div className="desc">
                        <div className="chevron"></div>
                        <div className="avatar">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="content">
                            <div className="name">
                                Dhanush kumar
                             </div>
                            <div className="status">
                                Active now
                             </div>
                        </div>
                        <div className="dots"></div>
                    </div>
                </div>
    )
}
