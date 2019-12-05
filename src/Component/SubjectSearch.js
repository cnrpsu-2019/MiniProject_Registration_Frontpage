import React, { Component } from "react"
import _ from "lodash"
import Axios from "axios"
import RegisterProcess from "./RegisterProcess"
let baseUrl = "http://dev.theduckcreator.in.th:8080/"

//Note On Function RenderObject
// Phase Number to set Button Add or Remove Subject
// 1 Be ADD 2 Be Remove
class SubjectSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: this.props.student,
      subject: [],
      registerSubject: [],
      searchFaculty: "",
      displayTable: null,
      displayPreregisTable: null,
      enableSubjectSearch: false
    }
    this.activeFacultySearch = this.activeFacultySearch.bind(this)
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this)
  }

  onSubmitSearchForm = event => {
    let url = baseUrl
    url = baseUrl + this.state.searchFaculty
    console.log("On Submit")
    console.log(this.state.searchFaculty)
    Axios.get(url).then(valueRespond => {
      this.setState({ subject: valueRespond.data.subject })
    })
    let table = this.renderSubject(this.state.subject, 1)
    event.preventDefault()
    this.setState({
      displayTable: table
    })
  }

  // Phase Number to set Button Add or Remove Subject
  // 1 Be ADD 2 Be Remove
  renderSubject = (group, phase) => {
    let displayTable = _.map(group, subjectinfo => {
      return (
        <tr>
          <td>{subjectinfo.subjectCode}</td>
          <td>{subjectinfo.subjectName}</td>
          <td>{subjectinfo.subjectRegisAmount}</td>
          <td>{subjectinfo.subjectAllAmount}</td>
          <td>
            <button
              className={phase == 1 ? "button is-primary" : "button is-danger"}
              onClick={() => this.addOrRemoveForRegister(subjectinfo, phase)}
            >
              {phase == 1 ? "เพิ่ม" : "ลบ"}
            </button>
          </td>
          <td>-</td>
        </tr>
      )
    })
    return displayTable
  }

  addOrRemoveForRegister = (subject, phase) => {
    //phase 1 is add , phase 2 is remove
    console.log("Add or Remove For Register call")
    let newRegisSubject = this.state.registerSubject
    if (phase == 1) {
      newRegisSubject.push(subject)
    }
    if (phase == 2) {
      newRegisSubject.pop(subject)
    }
    this.setState({
      registerSubject: newRegisSubject
    })
    console.log(this.state.registerSubject)
    let table = this.renderSubject(this.state.registerSubject, 2)
    this.setState({
      displayPreregisTable: table
    })
  }

  activeFacultySearch = event => {
    console.log(event.target.value)
    this.setState({
      searchFaculty: event.target.value,
      enableSubjectSearch: true
    })
    console.log(this.state.searchFaculty)
  }

  register = () => {
    window.confirm("ยินยันการลงทะเบียน")
    {
      this.props.returnRegisPage()
    }
    return (
      <RegisterProcess
        subject={this.state.registerSubject}
        id={this.state.student}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-6">
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
          </div>
          <div className="column is-6">
            <div className="columns">
              <div className="column">
                <p>จำนวนการลงทะเบียน</p>
                <h5 className="subtitle is-3">
                  {this.state.registerSubject.length} วิชา
                </h5>
              </div>
              <div className="column">
                <p>ส่งฟอร์มการลงทะเบียน</p>
                <button className="button is-primary" onClick={this.register}>
                  ลงทะเบียน
                </button>
              </div>
            </div>
          </div>
        </div>

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
        <hr />
        <h4 className="title is-5 ">รายวิชาที่อยู่ใน List การลงทะเบียน</h4>
        <p>การลบนั้นสามารถลบได้โดยเริ่มจากวิชาที่เพิ่มล่าสุดเท่านั้น</p>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>ลงแล้ว</th>
                <th>จาก</th>
                <th>ลบ</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>{this.state.displayPreregisTable}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default SubjectSearch
