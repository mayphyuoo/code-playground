import React, { Component } from "react";
import "./Output.css";

class Output extends Component {
  componentDidMount() {
    const iFrame = document.getElementById("iFrame").contentWindow.document;
    const htmlTextArea = document.getElementById("htmlTextarea");
    const cssTextArea = document.getElementById("cssTextarea");
    const jsTextArea = document.getElementById("jsTextarea");
    const runBtn = document.getElementById("runBtn");

    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        htmlTextArea.value = "";
        cssTextArea.value = "";
        jsTextArea.value = "";
        runBtn.click();
    });

    runBtn.addEventListener("click", function () {
      iFrame.open();
      iFrame.writeln(
        htmlTextArea.value +
          "<style>" +
          cssTextArea.value +
          "</style>" +
          "<script>" +
          jsTextArea.value +
          "</script>"
      );
      iFrame.close();
    });


  }

  render() {
    return (
      <div>
        <iframe id="iFrame" title="Output"></iframe>
      </div>
    );
  }
}

export default Output;