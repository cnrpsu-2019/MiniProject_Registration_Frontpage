import React, { Component } from "react"
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
          teacher: "",
          deleteStatus: false
        }
      ]
    }
  }

  componentDidMount() {
    //Mock Data
    //TODO
  }

  renderSubject = () => {
    for (var i = 0; i < this.state.regisSubject.length; i++) {
      this.showSubject(i)
    }
  }

  showSubject = ref => {
    return (
      <tr>
        <th>{ref + 1}}</th>
        <td>{this.state.regisSubject[ref].subjectCode}</td>
        <td>{this.state.regisSubject[ref].subjectName}</td>
        <td>{this.state.regisSubject[ref].subjectRegisAmount}</td>
        <td>{this.state.regisSubject[ref].subjectAllAmount}</td>
        <td>ไม่มัข้อมูล</td>
        <td>
          <button className="button is-danger">ลบ</button>
        </td>
        <td>-</td>
      </tr>
    )
  }

  render() {
    var subject = this.renderSubject()
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
                <th>
                  <abbr title="No.">No.</abbr>
                </th>

                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>ลงแล้ว</th>
                <th>จาก</th>
                <th>อาจารย์</th>
                <th>ลบ</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>{subject}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Register
