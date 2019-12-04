import React, { Component } from "react"
import _ from "lodash"
class SubjectSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: [],
      registerSubject: []
    }
  }
  componentDidMount = () => {
    this.setState({
      subject: this.props.value
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
    window.alert("You have select" + subject.subjectName)
    this.state.registerSubject.push(subject)
  }

  render() {
    let displayTable = this.renderSubject()
    return (
      <div>
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
            <tbody>{displayTable}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default SubjectSearch
