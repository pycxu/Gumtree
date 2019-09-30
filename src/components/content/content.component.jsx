import React from 'react';

import './content.styles.scss';

const Content = ({IpadMini, content, index}) => (
        <div className="content-container">
            <div className="image-wrap">
                <img className="image" src={IpadMini} alt="mini"/>
            </div>
            <div className="content-item">
                    <p dangerouslySetInnerHTML={{__html: (content[index]? content[index].description: null)}} />
            </div>
        </div>
)

export default Content;