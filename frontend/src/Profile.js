import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Profile = (props) => {

  var Box = (props) => {
    var boxStyle = {
      padding: 20,
      margin: 30,
      display:"inline-block",
      textAlign: 'left',
      alignItems: 'center',
      fontSize: 15,
      fontFamily: 'Helvetica Neue',
      width: props.width,
      height: props.height,
      backgroundColor: props.color,
      border: 10,
      borderWidth: 5,
      borderColor: '#000000'
    };
    return (
    <div style={boxStyle}> {props.txt}
      </div>
    );
  }
 var renderData = [];

  var namewidth = 300
  var nameheight = 100
  var biowidth = 430
  var bioheight = 200

  renderData.push(<Box txt={props.name} color="#FFFFFF" width={namewidth} height={nameheight}/>);
  renderData.push(<Box txt={props.bio} color="#E6F7FF" width={biowidth} height={bioheight}/>);

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
      <div style={circleStyle}> {props.txt} <br/> {props.val}
        </div>
      );
    };

  var colors = ["#E6F7FF", "#E6F7FF", "#E6F7FF"];
  var texts = ["MONEY MADE", "TASKS COMPLETED", "CURRENT CHALLENGES"];
  var nums = ["$XX", "XX", "XX"];
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
    <Row>
        <Image src={props.src} rounded />
        {renderData[0]}
    </Row>
    <Row>
      {renderData[1]}
    </Row>
    <Row>
      <Col sm={20}>{renderData[2]}</Col>
      <Col sm={20}>{renderData[3]}</Col>
      <Col sm={20}>{renderData[4]}</Col>
    </Row>

  </Container>
);

  return (
    <Container>
      <Row>
        <Col>
          <Image src={props.src} rounded />
        </Col>
        <Col>
          {props.name}
        </Col>
      </Row>
      <Row>
        <Col>
          {props.bio}
        </Col>
      </Row>
      <Row>
        {props.badges.map(badge => {
          return (
            <Col>
              <Image src={badge.img} rounded />
            </Col>
          )
        })}
      </Row>
      {/* IDK how to do the 3 circles. */}
    </Container>


  );
}

export default Profile;
