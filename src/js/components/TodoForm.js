import React, { Component } from "react";
import Todo from "./Todo";
import styled from "styled-components";
import { validate } from "../helper";
import todos from "../../todos.json";
class TodoForm extends Component {
  constructor(props) {
    super();
    this.todos = todos;
    this.textInput = React.createRef();
    this.state = {
      error: "",
      term: "",
      created: "",
      items: []
    };
  }
  onChange = e => {
    this.setState({
      error: "",
      term: e.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    if (validate(this.state.term)) {
      this.setState({
        term: "",
        items: [
          ...this.todos,
          {
            created: this.getDate,
            term: this.state.term
          }
        ]
      });
    } else {
      this.setState({
        error: "error"
      });
    }
  };
  getDate = () => {
    let d = new Date();
    let datestring =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();
    return datestring;
  };
  componentDidMount() {
    let todo = {
      created: this.state.created,
      term: this.state.term
    };
    if (this.state.term !== "") {
      this.todos.push(JSON.stringify(todo));
      console.log("pushed to array");
    }
    this.setState({
      items: [...this.todos]
    });
  }
  handleChange = () => {
    console.log("handlechange isa active");
  };
  render() {
    return (
      <Div>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            ref={this.textInput}
            value={this.state.term}
            onChange={this.onChange}
            className={this.state.error}
          />
          <Button primary>Add Todo</Button>
        </Form>
        <Ul>
          {this.state.items.map((item, index) => (
            <Todo key={index} item={item} />
          ))}
        </Ul>
      </Div>
    );
  }
}
// styling
const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 20px;
`;
const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const Form = styled.form`
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-wrap-wrap;
  justify-content: space-between;  
  transition: all 600ms;
`;
const Input = styled.input`
  width: 68%;
  border: 0;
  outline: none;
  line-height: 20px;
  font-size: 30px;
  padding: 20px;
  border: 1px solid darkgreen;
  color: #000;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  transition: all 600ms;
  &.error {
    border-color: red;
  }
`;
const Button = styled.button`
  width: 28%;
  transition: all 600ms;
  border: 0;
  outline: none;
  padding: 20px;
  line-height: 20px;
  font-family: sans-serif;
  border-radius: 5px;
  background: ${props => (props.primary ? "#00b33c" : "palevioletred")};
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: white;
`;
export default TodoForm;
