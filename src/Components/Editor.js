import React, { Component } from "react";
import "./Editor.css";

class MyTabs extends Component {
    render() {
      return (
        <div id="row">
            <div>
                <p className="label">HTML</p>
                <textarea id="htmlTextarea"></textarea>
            </div>
            
            <div>
                <p className="label">CSS</p>
                <textarea id="cssTextarea"></textarea>
            </div>
            
            <div>
                <p className="label">JS</p>
                <textarea id="jsTextarea"></textarea>
            </div>  
        </div>

      );
    }
  }
  
  export default MyTabs;