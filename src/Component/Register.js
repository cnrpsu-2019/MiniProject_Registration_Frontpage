import React, { Component } from "react"
import _ from "lodash"
import Axios from "axios"
var baseUrl = "http://dev.theduckcreator.in.th:8080/register"

class Register extends Component {
  constructor(props) {
    super(props)
    let subject = this.props.subject
    let subjectCode = []
    subject.forEach(sub => {
      subjectCode.push(sub.subjectCode)
    })

    this.state = {
      student: this.props.student,
      subjectCode: subjectCode
    }
  }
  componentDidMount() {
    //Post
    console.log("Subject Code Array")
    console.log(this.state.subjectCode)
    let registerRequest = {
      StudentID: this.state.student,
      SubjectToEnroll: this.state.subjectCode
    }
    console.log(registerRequest)
    let registerRequestJSON = JSON.stringify(registerRequest)

    console.log(registerRequestJSON)
    console.log("String Parse")
    console.log(JSON.parse(registerRequestJSON))
    Axios.post(baseUrl, JSON.parse(registerRequestJSON))
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <h3 className="title is-4">กำลังเตรียมลงทะเบียน</h3>
        <p>รหัสนักศึกษา {this.state.student}</p>
        <hr />
      </div>
    )
  }
}
export default Register
