import React, { Component } from "react";
import "./Editor.css";

class MyTabs extends Component {
    render() {
      return (
        <div id="row">
            <textarea id="htmlTextarea"></textarea>

            <textarea id="cssTextarea"></textarea>

            <textarea id="jsTextarea"></textarea>
        </div>

      );
    }
  }
  
  export default MyTabs;