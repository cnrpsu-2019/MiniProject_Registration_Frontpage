import React, { Component } from "react"
import _ from "lodash"
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regisSubject: this.props.value
    }
  }

  renderSubject = () => {
    console.log("hi from renderSubject")
    console.log(this.state.regisSubject)
    let displayTable = _.map(this.state.regisSubject, subjectinfo => {
      return (
        <tr>
          <td>{subjectinfo.subjectCode}</td>
          <td>{subjectinfo.subjectName}</td>
          <td>{subjectinfo.subjectRegisAmount}</td>
          <td>{subjectinfo.subjectAllAmount}</td>

          <td>
            <button className="button is-danger">ลบ</button>
          </td>
          <td>-</td>
        </tr>
      )
    })
    return displayTable
  }

  registerSubmit = () => {}

  render() {
    let displayTable = this.renderSubject()
    return (
      <div>
        <h3 className="title is-4">รายวิชาที่อยู่ใน List การ Register</h3>
        <p>
          ถ้าหากยังไม่มีให้ไปค้นหารายวิชาที่ท่านสนใจ แล้ว แล้วกด Add For
          Register ก่อน
        </p>
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
            <tbody>{displayTable}</tbody>
          </table>
        </div>
        <hr />
        <button className="button is-primary" onClick={this.registerSubmit}>
          ยืนยันการลงทะเบียน
        </button>
      </div>
    )
  }
}
export default Register
