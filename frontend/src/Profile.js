import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './center.css';
import prof from './images/prof5.png'

const Profile = (props) => {

  var Box = (props) => {
    var boxStyle = {
      padding: 20,
      margin: 30,
      display:"inline-block",
      textAlign: props.align,
      alignItems: 'center',
      fontSize: props.type == "name" ? "5vw" : "3vw",
      fontFamily: 'Lato',
      width: props.width,
      height: props.height,
      backgroundColor: props.color,
    };
    return (
    <div style={boxStyle}> {props.txt}
      </div>
    );
  }
 var renderData = [];

  var namewidth = 300
  var nameheight = 25
  var biowidth = 430
  var bioheight = 200

  renderData.push(<Box txt={props.name} color="#D6ECF3" width={namewidth} height={nameheight} align="center"/>);
  renderData.push(<Box txt={props.bio} color="#E6F7FF" width={biowidth} height={bioheight} align="left"/>);

  var Circle = (props)=> {
      var circleStyle = {
        padding:20,
        margin:20,
        display:"inline-block",
        textAlign: 'center',
        alignItems: 'center',
        fontSize: props.fontSize,
        fontFamily: 'Lato',
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        border: 4,
        boxShadow: "0 0 3pt 2pt #A9A9A9",
        borderColor: '#000000',
        width:props.size,
        height:props.size,
      };
      return (
      <div style={circleStyle}> {props.txt} <br/> {props.val}
        </div>
      );
    };

  var colors = ["#FFF", "#FFF", "#FFF"];
  var texts = ["MONEY MADE", "TASKS COMPLETED", "CURRENT CHALLENGES"];
  var nums = ["$24", "56", "2"];
  var sizes = [100, 150, 100];
  var fontSizes = [12, 19, 10];

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
      <div className="center_div"><Image src={prof} borderRadius={"50%"} rounded width={"25%"} height={"25%"} /></div>
      <div className="center_div">{renderData[0]}</div>
      <div className="center_div">{renderData[1]}</div>
    <div className="center_div">
        <Col sm={20}>{renderData[2]}</Col>
        <Col sm={20}>{renderData[3]}</Col>
        <Col sm={20}>{renderData[4]}</Col>
    </div>

  </Container>
);

}

export default Profile;
