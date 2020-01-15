import React, { Component } from "react";

import NavigationBar from "../components/NavigationBar";

export default class HeaderPage extends Component {

  handleOpenPdf = () =>
    window.open(`${process.env.CV_URL_PDF}`, "_blank");

  render() {
    return (
      <NavigationBar
        onHtmlClick={this.handleOpenHtml}
        onPdfClick={this.handleOpenPdf}
        onWordClick={this.handleOpenWord}
        breadCrumb={this.props.breadCrumb}
      />
    );
  }
}
