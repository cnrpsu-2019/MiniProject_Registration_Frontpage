import React, { Component } from "react"
import _ from "lodash"
import Axios from "axios"
import io from "socket.io-client"
var baseUrl = "http://localhost:8080/register"

class Register extends Component {
  constructor(props) {
    super(props)
    let subject = this.props.subject
    let subjectCode = []
    subject.forEach(sub => {
      subjectCode.push(sub.subjectCode)
    })
    //result Fail = false, Success = true
    this.state = {
      student: this.props.student,
      subjectCode: subjectCode,
      result: false,
      socket: "",
      serverEventResult: null
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
    let socket
    console.log(registerRequestJSON)
    console.log("String Parse")
    console.log(JSON.parse(registerRequestJSON))
    Axios.post(baseUrl, JSON.parse(registerRequestJSON))
      .then(response => {
        console.log(response)
        let url = "http://localhost:3030/"
        socket = io.connect(url)
        this.setState({ result: true, socket: socket })
      })
      .catch(error => {
        console.log("Socket IO Client Error")
        console.log(error)
      })
  }

  socketReturn = () => {
    if (this.state.result == true) {
      console.log("Initial SocketIO Client")
      let socket = this.state.socket
      socket.on("RegisterIO", data => {
        console.log(data)
        this.setState({
          serverEventResult: data
        })
        window.alert(
          "การลงทะเบียนของคุณเสร็จสิ้นแล้วผลคือ " + data.SubjectSuccessEnroll
        )
      })
      socket.on("disconnect", () => {
        socket.disconnect()
      })
    }
  }

  render() {
    this.socketReturn()
    return (
      <div>
        <h3 className="title is-4">เริ่มเข้าสู่การลงทะเบียน</h3>
        <p>รหัสนักศึกษา {this.state.student} กรุณารอสักครู่</p>

        {/* <progress className="progress is-small is-warning" max="100" /> */}
        <hr />
      </div>
    )
  }
}
export default Register
