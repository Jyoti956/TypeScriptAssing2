import React, { Component } from "react";
import {AProps} from './Admin';

class BtnCellRenderer extends Component<AProps>{
  
  btnClickedHandler():void {
        this.props.clicked(this.props.value);
  }
  render() {
    return <button 
            className="btn btn-primary" 
            onClick={this.btnClickedHandler.bind(this)}
            >Approve</button>
  }
}

export default BtnCellRenderer;