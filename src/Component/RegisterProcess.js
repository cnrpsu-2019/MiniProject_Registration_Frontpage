import React, { Component } from "react"
class RegisterProcess extends Component {
  //Push to Server and open the socket
  constructor(props) {
    super(props)
    this.state = {
      studentID: this.props.id,
      subject: this.props.subject
    }
  }
}
export default RegisterProcess
