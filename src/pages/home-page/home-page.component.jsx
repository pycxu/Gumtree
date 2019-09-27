import React from 'react';

import './home-page.styles.scss';
import Data from '../../frontend-test/content.json';
import IpadMini from '../../frontend-test/ipad-mini.jpg';
import Header from '../../components/header/header.component';
import Content from '../../components/content/content.component';
import Footer from '../../components/footer/footer.component';


class HomePage extends React.Component {
    constructor () {
        super();
        this.state = {
            title: Data.title,
            content: Data.content,
            collapse: false,
            index: 0
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         title: Data.title,
    //         content: Data.content
    //     })
    // }

    headerHandler = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    footerHandler = (method) => {
        if(method === "prev"){
            this.state.content[this.state.index - 1]
            ? this.setState({index: this.state.index - 1})
            : this.setState({index: this.state.content.length - 1})
        }else{
            this.state.content[this.state.index + 1]
            ? this.setState({index: this.state.index + 1})
            : this.setState({index: 0})
        }
        
    }

    render() {
        
        return(
            <div className="home-page-container">
                <Header title={this.state.title} collapse={this.state.collapse} headerHandler={this.headerHandler}/>
                <div className={`${this.state.collapse?"collapse":""} drop-down-content-wrap`}>
                    <Content IpadMini={IpadMini} content={this.state.content} index={this.state.index}/>
                    <Footer content={this.state.content} index={this.state.index} footerHandler={this.footerHandler}/>
                </div>
            </div>
        );
    }
}

export default HomePage;