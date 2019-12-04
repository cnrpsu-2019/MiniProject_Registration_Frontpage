import React, { Component } from "react"
import _ from "lodash"
import Axios from "axios"
let url = "http://dev.theduckcreator.in.th:8080/subject/"

class SubjectSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: [],
      registerSubject: [],
      searchFaculty: "",
      displayTable: null
    }
    this.activeFacultySearch = this.activeFacultySearch.bind(this)
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this)
  }

  onSubmitSearchForm = event => {
    console.log("On Submit")
    console.log(this.state.searchFaculty)
    Axios.get(url).then(valueRespond => {
      this.setState({ subject: valueRespond.data })
    })
    let table = this.renderSubject()
    event.preventDefault()
    this.setState({
      displayTable: table
    })
  }

  renderSubject = () => {
    let displayTable = _.map(this.state.subject, subjectinfo => {
      return (
        <tr>
          <td>{subjectinfo.subjectCode}</td>
          <td>{subjectinfo.subjectName}</td>
          <td>{subjectinfo.subjectRegisAmount}</td>
          <td>{subjectinfo.subjectAllAmount}</td>

          <td>
            <button
              className="button is-primary"
              onClick={() => this.addForRegister(subjectinfo)}
            >
              เพิ่ม
            </button>
          </td>
          <td>-</td>
        </tr>
      )
    })
    return displayTable
  }

  addForRegister = subject => {
    window.alert("You have select " + subject.subjectName)
    this.state.registerSubject.push(subject)
  }

  activeFacultySearch = event => {
    console.log(event.target.value)
    this.setState({ searchFaculty: event.target.value })
    console.log(this.state.searchFaculty)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitSearchForm}>
          <div className="control">
            <label className="label">เลือกคณะ</label>
            <div className="select">
              <select
                value={this.state.searchFaculty}
                onChange={this.activeFacultySearch}
              >
                <option value="">เลือกคณะที่ต้องการ</option>
                <option value="engineering">วิศวกรรมศาสตร์</option>
                <option value="science">วิทยาศาสตร์</option>
              </select>
            </div>
            <button type="submit" className="button is-primary">
              ค้นหา
            </button>
          </div>
        </form>

        <hr />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>ลงแล้ว</th>
                <th>จาก</th>
                <th>เพิ่ม</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>{this.state.displayTable}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default SubjectSearch
