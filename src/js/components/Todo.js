import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { Animated } from "react-animated-css";
import { Avatar } from "@material-ui/core";
class Todo extends Component {
  state = {
    todoValue: ""
  };
  onRemove = e => {
    if (
      e.target.classList.contains("material-icons") ||
      e.target.classList.contains("MuiAvatar-root-1")
    ) {
      e.target.parentElement.parentElement.remove();
    } else {
      console.log("not in the right element");
    }
  };
  updateTitle = e => {
    this.setState({
      todoValue: this.props.item.term
    });
  };
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutRightBig"
        isVisible={true}
      >
        <Li onClick={this.handleClick}>
          <H2>
            {this.props.item.term}
            <P>{this.props.item.created}</P>
          </H2>
          <Avatar onClick={this.updateTitle}>
            <Icon color="primary">edit</Icon>
          </Avatar>
          <Avatar color="action" onClick={this.onRemove}>
            <Icon color="error">remove</Icon>
          </Avatar>
        </Li>
      </Animated>
    );
  }
}
// styling;
const P = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;
const Li = styled.li`
  width: 100%;
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 30px;
  font-size: 20px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  background-color: #00b33c;
`;

const H2 = styled.h2`
  width: 80%;
  font-size: 30px;
`;
export default Todo;
