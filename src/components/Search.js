import React, { Component } from 'react'
import {connect} from 'react-redux'
class Search extends Component {
    render() {
        return (
            <div>
               <div className="box">
                    <form>
                        <input type="text" name="" placeholder="Search Movie Title"></input>
                        <button type="submit"><span className="material-icons">search</span></button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
//    simpleAction: () => dispatch(simpleAction())
   })

export default connect(mapStateToProps, mapDispatchToProps)(Search);
