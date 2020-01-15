import React, { Component } from "react";

import NavigationBar from "../components/NavigationBar";

export default class HeaderPage extends Component {

  handleOpenPdf = () =>
    window.open(`${process.env.REACT_APP_CV_URL_PDF}`, "_blank");

  render() {
    return (
      <NavigationBar
        onPdfClick={this.handleOpenPdf}
        breadCrumb={this.props.breadCrumb}
      />
    );
  }
}
