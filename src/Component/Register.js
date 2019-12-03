import React, { Component } from "react"
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regisSubject: []
    }
  }

  showSubject = () => {
    return (
      <tr>
        <th>1</th>
        <td>240-460</td>
        <td>Internet Programing</td>
        <td>3</td>
        <td>60</td>
        <td>สุธน</td>
        <td>
          <button className="button is-danger">ลบ</button>
        </td>
        <td>-</td>
      </tr>
    )
  }
  render() {
    var subject = this.showSubject()
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
