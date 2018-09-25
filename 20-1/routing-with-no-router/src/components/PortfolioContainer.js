import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handlePage = () => {
    if(this.state.currentPage === "About") {
      return <About active="active"/>
    } else if (this.state.currentPage === "Blog") {
      return <Blog active="active"/>
    } else if (this.state.currentPage === "Home") {
      return <Home active="active"/>
    } else if(this.state.currentPage === "Contact") {
      return <Contact active="active"/>
    }
  };
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
      {this.handlePage()}
      </div>
    );
  }
}

export default PortfolioContainer;