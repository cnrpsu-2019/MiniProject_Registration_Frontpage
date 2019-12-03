import React, { Component } from "react"
import _ from "lodash"
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    //Mock Data
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

  renderSubject = () => {
    console.log("hi from renderSubject")
    let displayTable = _.map(this.state.regisSubject, subjectinfo => {
      return (
        <tr>
          {/* <th>1</th> */}
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
      </div>
    )
  }
}
export default Register
