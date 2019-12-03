import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import Menu from "./Component/Menu"
import SubjectSearch from "./Component/SubjectSearch"
import Register from "./Component/Register"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPage: "search",
      studentName: "Ms.Duke",
      studentFaculty: "Engineering",
      regisSubject: [
        {
          subjectCode: "",
          subjectName: "",
          subjectRegisAmount: 0,
          subjectAllAmount: 0,
          deleteStatus: false
        }
      ]
    }
  }

  componentDidMount() {
    var mockRegisSubject = Array(
      {
        subjectCode: "240-461",
        subjectName: "Enterprise Network",
        subjectRegisAmount: 2,
        subjectAllAmount: 30,
        deleteStatus: false
      },
      {
        subjectCode: "240-460",
        subjectName: "Internet Programing",
        subjectRegisAmount: 3,
        subjectAllAmount: 30,
        deleteStatus: false
      }
    )
    this.setState({ regisSubject: mockRegisSubject })
  }

  returnSubjectSearch = () => {
    this.setState({
      renderPage: "search"
    })
  }

  returnRegisPage = () => {
    this.setState({
      renderPage: "register"
    })
  }

  render() {
    if (this.state.renderPage == "search") {
      var elementFrontPage = <SubjectSearch />
    } else if (this.state.renderPage == "register") {
      var elementFrontPage = <Register value={this.state.regisSubject} />
    }

    return (
      <div className="container">
        <br />
        <h1 className="subtitle is-3">
          ระบบลงทะเบียนเรียน | Subject Registration System
        </h1>
        <hr />
        <div className="columns">
          <div className="column is-3">
            <Menu
              name={this.state.studentName}
              faculty={this.state.studentFaculty}
            />
          </div>
          <div className="column is-9">
            <div className="tabs">
              <ul>
                <li
                  className={
                    this.state.renderPage == "search" ? "is-active" : ""
                  }
                >
                  <a onClick={this.returnSubjectSearch}> ค้นหารายวิชา </a>
                </li>
                <li
                  className={
                    this.state.renderPage == "register" ? "is-active" : ""
                  }
                >
                  <a onClick={this.returnRegisPage}>ลงทะเบียนเรียน</a>
                </li>
              </ul>
            </div>
            <div id="element">{elementFrontPage}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
