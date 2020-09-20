import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom'

const Box = (props) => {
  var boxStyle = {
    padding: 20,
    margin: 20,
    display: "inline-block",
    textAlign: 'left',
    alignItems: 'center',
    fontSize: 20,
    fontFamily: 'Lato',
    width: 430,
    height: 200,
    backgroundColor: "#E6F7FF",
    border: 10,
    borderWidth: 5,
    borderColor: '#000000'
  };
  return (
    <div style={boxStyle}>
      {props.text}
    </div>
  );
}

const Circle = (props) => {
  var circleStyle = {
    padding: 20,
    margin: 20,
    display: "inline-block",
    textAlign: 'center',
    alignItems: 'center',
    fontSize: props.fontSize,
    fontFamily: 'Lato',
    backgroundColor: props.bgColor,
    borderRadius: "50%",
    border: 4,
    boxShadow: "0 0 3pt 2pt #A9A9A9",
    borderColor: '#000000',
    width: props.size,
    height: props.size,
  };
  return (
    <div style={circleStyle}> <br /> {props.txt} <br /> {props.val}
    </div>
  );
};

const Details = (props) => {
  var renderData = [];
  var colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
  var texts = ["COMPLETED", "REWARD", "GOAL"];
  console.log(props.challenge);
  var nums = [`${props.challenge.completed.length || "XX"} tasks`, `${props.challenge.prize || "$XX"}`, `${props.challenge.end_condition.cond || "XX"}`];
  var sizes = [100, 150, 100];
  var fontSizes = [11, 15, 12];

  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    var text = texts[i];
    var num = nums[i];
    var size = sizes[i];
    var fontSize = fontSizes[i];
    renderData.push(<Circle key={i + color} bgColor={color} txt={text} val={num} size={size} fontSize={fontSize} />);
  }


  return (

    <Container>
      <Row>
        <Box text={props.challenge.info}/>
      </Row>
      <Row>
        <Col sm={20}>{renderData[0]}</Col>
        <Col sm={20}>{renderData[1]}</Col>
        <Col sm={20}>{renderData[2]}</Col>
      </Row>

    </Container>
  );

}
export default Details;
