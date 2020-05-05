import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                {/* <form class="example" style={{margin:'auto',maxWidth:'300px'}}>
                <input type="text" placeholder="Search Movie Title"></input>
                <button type="submit"><i className="material-icons">search</i></button>
                </form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr> */}
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
