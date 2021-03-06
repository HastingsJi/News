import React, { Component } from 'react';
import './SearchBar.css';

import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import {trackSearchTerm} from "../actions/track_search_term";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.trackSearchTerm(this.state.term);
      }

    render() {
        return (

            <nav>
            <div class="nav-wrapper">
              <form onSubmit={this.handleSubmit}>
                <div class="input-field">
                
                  <input id="search" type="search" required 
                    value = {this.state.term}
                    onChange={
                        (event) => {
                            this.setState({term:event.target.value});
                        }
                    }
                  />
                  <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                  <i class="material-icons">close</i>
                  
                </div>
             
              </form> 
            </div>
          </nav>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({trackSearchTerm}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 