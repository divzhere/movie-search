import React from 'react';
import Search from './components/Search'
import {connect} from 'react-redux'
import './style/style.css'
function App() {
  return (
    <div>
    <Search/>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
