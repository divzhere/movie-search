import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../actions/moviesAction'

class Search extends Component {
    constructor(props){
        super();
        this.state = { 
            input: ''
        } 
        this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            input:e.target.value
        })
    }

    handleSubmit = (e)  => {
        e.preventDefault()
        this.props.dispatch(getMovies(this.state.input))
    }

    render() {
        return (
            <div>
               <div className="box">
                    <form>
                        <input type="text" name="" placeholder="Search Movie Title"
                        onChange={this.handleChange.bind(this)}></input>
                        <button onClick={this.handleSubmit.bind(this)}><span className="material-icons">search</span></button>
                    </form>
                    {this.state.input}
                </div>
            </div>
        )
    }
}

  
function mapStateToProps(state) {
    const {searchResults} = state.MoviesReducer;
    return {searchResults}
}
 
export default connect(mapStateToProps)(Search);
