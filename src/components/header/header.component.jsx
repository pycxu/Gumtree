import React from 'react';

import './header.styles.scss';

const Header = ({title, headerHandler, collapse}) => (
    <div className="header-container">
        <div className="header-title-wrap">
            <div className="header-title">
                <span className="header-img" role="img" aria-label="sheet">📄</span>
                <span>{title}</span>
            </div>
        </div>
        <div className="header-btn-wrap">
            <button className="header-btn" onClick={headerHandler}>
                {collapse ? <span role="img" aria-label="up">▲</span> : <span role="img" aria-label="up">▼</span>}
            </button>
        </div>
    </div>
)

export default Header;