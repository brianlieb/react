import React, { Component } from 'react';

export default class Display extends Component {             
  constructor(props) {
    super(props);
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.value.length < this.props.value.length) {
      const { scrollTop, scrollHeight, offsetHeight } = this.refs._ul;
      
      return { scrollTop, scrollHeight, offsetHeight };
    }
    
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //If the user has scrolled to the bottom, then scroll as new data arrives, not otherwise
    
    if(snapshot !== null) {
      const lastVisible = snapshot.scrollHeight - snapshot.scrollTop < (snapshot.offsetHeight + 10);

      if(lastVisible) {
        this.refs._ul.scrollTop = this.refs._ul.scrollHeight;
      }
    }
  }
  
  render() {
    const data = this.props.value;

    return <ul ref="_ul">
      {   
        data.map((number) => <li key={ number.toString() }>{ number }</li>)
      }
    </ul>;
  }
}