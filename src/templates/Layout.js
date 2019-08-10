import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <section>{children}</section>
    <Footer />
  </Fragment>
);

export default withRouter(Layout);
