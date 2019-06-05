import React, { Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

/**
 * The header of the website
 *
 * @version 1.0.0
 * @author [Henry Heberle](https://github.com/heberleh)
 */
class Header extends Component{
    static propTypes = {
        /**
         * The title of the webpage
         */
        title: PropTypes.string.isRequired,
        /**
         * The author of the webpage
         */
        author: PropTypes.string,
        /** 
         * The author's webpage
         */
        authorUrl: PropTypes.string

        // React Style Guide: https://react-styleguidist.js.org/docs/documenting.html
    }

    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            author: props.author,
            authorUrl: props.authorUrl
        }       
    }

    render(){
        return(
            <div className="App-header d-flex justify-content-center align-self-stretch">
                <div class=" d-flex justify-content-center align-items-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>{this.state.title}</span>
                </div>                
                <div class="d-flex justify-content-right align-items-center">
                    <span class="author">
                        <a href={this.state.authorUrl}>
                             {this.state.author} 
                        </a>
                    </span>
                </div>
            </div>           
        );
    }

}

export default Header;