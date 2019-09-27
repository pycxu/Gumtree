import React from 'react';

import './content-preview.styles.scss';
import data from '../frontend-test/content.json';
import ipadMini from '../frontend-test/ipad-mini.jpg';

class ContentPreview extends React.Component {
    constructor () {
        super();

        this.state = {
            index: 0,
            collapse: false,
            data: data
        }  
    }    
          
    render() {
        return (
            <div className="container">
                <div className="menu-wrap">
                    <div className="menu-title-wrap">
                        <div className="menu-title"><span role="img" aria-label="sheet">📄</span>{`${this.state.data.title}`}</div>
                    </div>
                    <div className="menu-toggle">
                        <button className="collapse" onClick={()=>this.setState({collapse: !this.state.collapse})}>{this.state.collapse ? <span role="img" aria-label="up">▴</span> : <span role="img" aria-label="up">▾</span>}</button>
                    </div>
                </div>
                <div className="dropdown-wrap">
                    <div className={`dropdown-content ${this.state.collapse ? "active" : ""}`}>
                        <div className="content-wrap">
                            <div className="content">
                                <div className="image-wrap">
                                    <img className="image" src={ipadMini} alt="mini"/>
                                </div>
                                <div className="content-item">
                                        {this.state.data.content[this.state.index].description}
                                </div>
                            </div>
                            <div className="footer">
                                <button onClick={
                                    this.state.data.content[this.state.index - 1]
                                    ? ()=>this.setState({index: this.state.index - 1})
                                    : ()=>this.setState({index: this.state.data.content.length - 1})
                                }>
                                    <span role="img" aria-label="left">◀</span>
                                    <span className="footer-text">
                                        {
                                            this.state.data.content[this.state.index - 1] ? this.state.data.content[this.state.index - 1].title : "Prev"
                                        }
                                    </span>
                                </button>
                                <button onClick={
                                    this.state.data.content[this.state.index + 1]
                                    ? ()=>this.setState({index: this.state.index + 1})
                                    : ()=>this.setState({index: 0})
                                }>
                                    <span className="footer-text">
                                        {
                                            this.state.data.content[this.state.index + 1] ? this.state.data.content[this.state.index + 1].title : "Next"
                                        }
                                    </span>
                                    <span role="img" aria-label="right">▶</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ContentPreview;