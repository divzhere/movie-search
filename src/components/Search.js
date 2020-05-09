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
       // console.log("TEXT CHANGE")
        this.setState({
            input:e.target.value
        })
    }

    handleSubmit = (e)  => {
      //  console.log("SUBMIT CLICKED")
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
                 </div>
                 <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title <span class="material-icons">sort</span></th>
                                <th>Year <span class="material-icons">sort</span></th>
                                <th>ImdbId <span class="material-icons">sort</span></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                           (!this.props.loading) && 

                           this.props.searchResults.map((d,i)=>(
                               <tr key={i}>
                                   <td>{d.Title}</td>
                                   <td>{d.Year}</td>
                                   <td>{d.imdbID}</td>
                                   <td><span class="material-icons">delete</span></td>
                               </tr>
                           ))
                       }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


  
function mapStateToProps(state) {
    const {searchResults,loading} = state.MoviesReducer;
    return {searchResults,loading}
}
 
export default connect(mapStateToProps)(Search);
