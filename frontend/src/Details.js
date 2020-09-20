import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom'

const Details = (props) => {

  var Box = (props) => {
    var boxStyle = {
      padding: 20,
      margin: 20,
      display:"inline-block",
      textAlign: 'left',
      alignItems: 'center',
      fontSize: 15,
      fontFamily: 'Helvetica Neue',
      width: 430,
      height: 200,
      backgroundColor: "#E6F7FF",
      border: 10,
      borderWidth: 5,
      borderColor: '#000000'
    };
    return (
    <div style={boxStyle}> "CHALLENGE DESCRIPTION GOES HERE"
      </div>
    );
  }
 var renderData = [];

  renderData.push(<Box/>);

  var Circle = (props)=> {
      var circleStyle = {
        padding:20,
        margin:20,
        display:"inline-block",
        textAlign: 'center',
        alignItems: 'center',
        fontSize: props.fontSize,
        fontFamily: 'Helvetica Neue',
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        border: 4,
        borderColor: '#000000',
        width:props.size,
        height:props.size,
      };
      return (
      <div style={circleStyle}> <br/> {props.txt} <br/> {props.val}
        </div>
      );
    };

  var colors = ["#E6F7FF", "#E6F7FF", "#E6F7FF"];
  var texts = ["COMPLETED", "POT", "GOAL"];
  var nums = ["XX", "$XX", "XX"];
  var sizes = [100, 150, 100];
  var fontSizes = [11, 18, 12];

  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    var text = texts[i];
    var num = nums[i];
    var size = sizes[i];
    var fontSize = fontSizes[i];
    renderData.push(<Circle key={i + color} bgColor={color} txt={text} val ={num} size={size} fontSize={fontSize}/>);
}


return(

  <Container>
    <Row>
      {renderData[0]}
    </Row>
    <Row>
      <Col sm={20}>{renderData[1]}</Col>
      <Col sm={20}>{renderData[2]}</Col>
      <Col sm={20}>{renderData[3]}</Col>
    </Row>

  </Container>
);

}
export default Details;
