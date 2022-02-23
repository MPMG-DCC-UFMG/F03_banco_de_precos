import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import "../Examples/Charts.css";


import TitleComponent2 from "./PageTitleExamples/Variation2";

class PageTitle extends Component {
  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading,
      subheading2,
      subheading3,
      subheading4,
    } = this.props;

    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div
              className={cx("page-title-icon", {
                "d-none": !enablePageTitleIcon,
              })}
            >
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div
                className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}
              >
                <h1 className="headerCHart"> {subheading}</h1>
                <h4>Descrição de Medida: {subheading2}</h4>
                <h4>Ano: {subheading3}</h4>
                <h4>Grupo: {subheading4}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// JOHNATAN
const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
