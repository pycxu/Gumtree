import React from 'react';

import './content.styles.scss';

const Content = ({IpadMini, content, index}) => (
        <div className="content-container">
            <div className="image-wrap">
                <img className="image" src={IpadMini} alt="mini"/>
            </div>
            <div className="content-item">
                    {content[index].description}
            </div>
        </div>
)

export default Content;