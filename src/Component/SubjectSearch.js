import React, { Component } from "react"
class SubjectSearch extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">ใส่ชื่อวิชา</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
          <br />
          <button className="button is-primary">Search</button>
        </div>
        <hr />
        <form>
          <div className="field">
            <label className="label">หรือ ใช้วิธีค้นหาจากลิสต์</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Demo</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default SubjectSearch
