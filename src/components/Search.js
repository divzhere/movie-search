import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form class="example" style={{margin:'auto',maxWidth:'300px'}}>
                <input type="text" placeholder="Search Movie Title"></input>
                <button type="submit"><i className="material-icons">search</i></button>
                </form>
            </div>
        )
    }
}
