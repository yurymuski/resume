import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconPdf from "./IconPdf";

import BreadCrumb from "./BreadCrumb";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const appBarStyle = {
  backgroundColor: "#473a56",
  position: "fixed",
  zIndex: 1
};

const PdfButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <IconPdf color="white" />
  </IconButton>
);

export default class NavigationBar extends Component {
  handleHtmlClick = () => this.props.onHtmlClick();
  handlePdfClick = () => this.props.onPdfClick();
  handleWordClick = () => this.props.onWordClick();

  renderDownloadLinks = () => (
    <div>
      <PdfButton onClick={this.handlePdfClick} />
    </div>
  );

  render() {
    return (
      <div>
        <Mobile>
          <AppBar
            style={appBarStyle}
            iconElementLeft={this.renderDownloadLinks()}
            iconElementRight={<BreadCrumb items={this.props.breadCrumb} />}
          />
        </Mobile>
        <Desktop>
          <AppBar
            style={appBarStyle}
            iconElementLeft={this.renderDownloadLinks()}
            title={<BreadCrumb items={this.props.breadCrumb} />}
          />
        </Desktop>
      </div>
    );
  }
}
