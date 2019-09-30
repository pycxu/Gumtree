import React from 'react';

import './footer.styles.scss';

const Footer = ({content, index, footerHandler}) => (
    <div className="footer-container">
        <button onClick={()=>footerHandler("prev")}>
            <span className="footer-img" role="img" aria-label="left">◀</span>
            <span className="footer-text">
                {content[index - 1] ? content[index - 1].title : "Prev"}
            </span>
        </button>
        <button onClick={()=>footerHandler("next")}>
            <span className="footer-text">
                {content[index + 1] ? content[index + 1].title : "Next"}
            </span>
            <span className="footer-img" role="img" aria-label="right">▶</span>
        </button>
    </div>
)

export default Footer;