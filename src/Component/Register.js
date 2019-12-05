import React, { Component } from "react"
import _ from "lodash"
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regisSubject: this.props.subject
      // student: this.props.student
    }
    console.log(this.state.subject)
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h3 className="title is-4">ทดสอบระบบ</h3>
        <p>{this.state.student}</p>
      </div>
    )
  }
}
export default Register
