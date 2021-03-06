import React from 'react';
import Touchable from './Touchable';
import rulesIcon from '../images/Trophy.png';
import showIconOn from '../images/Visible.png';
import showIconOff from '../images/Invisible.png';
import githubIcon from '../images/GitHub.png';
import videoIconOn from '../images/VideoMessage.png';
import videoIconOff from '../images/VideoEnd.png';
import restartIcon from '../images/Restart.png';
import purify from '../util/purify';

const menuStyle = {
  flexDirection:'row',
  backgroundColor:'#222',
  color:'#fff',
  fontSize:'1.25vw',
  flex:1,
};

const buttonStyle = {
  padding:'8px 0px',
  alignItems:'center',
  justifyContent:'flex-end',
  cursor:'pointer',
  flex:1,
  textAlign:'center'
}

const buttonStyleHover = {
  backgroundColor:'#333'
}

const buttonStyleActive = {
  backgroundColor:'#444'
}

const iconStyle = {
  height:45,
  width:45,
  padding:0,
  marginBottom:5,
  textAlign:'center',
  verticalAlign:'middle',
}

function Menu(props) {
  var { video, showAll } = props;
  return (
    <div style={menuStyle}>
      <Touchable style={buttonStyle} styleHover={buttonStyleHover} styleActive={buttonStyleActive} onClick={props.onVideo}>
        <img style={iconStyle} alt="" src={video ? videoIconOff : videoIconOn} />
        <span>{video ? 'stop video' : 'video chat'}</span>
      </Touchable>
      <Touchable style={buttonStyle} styleHover={buttonStyleHover} styleActive={buttonStyleActive} onClick={props.onSource}>
        <img style={iconStyle} alt="" src={githubIcon} />
        <span>contribute</span>
      </Touchable>
      <Touchable style={buttonStyle} styleHover={buttonStyleHover} styleActive={buttonStyleActive} onClick={props.onLink}>
        <img style={iconStyle} alt="" src={rulesIcon} />
        <span>how to play</span>
      </Touchable>
      <Touchable style={buttonStyle} styleHover={buttonStyleHover} styleActive={buttonStyleActive} onClick={props.onShow}>
        <img style={iconStyle} alt="" src={showAll ? showIconOff : showIconOn} />
        <span>{showAll ? 'hide words' : 'show words'}</span>
      </Touchable>
      <Touchable style={buttonStyle} styleHover={buttonStyleHover} styleActive={buttonStyleActive} onClick={props.onRestart}>
        <img style={iconStyle} alt="" src={restartIcon} />
        <span>new game</span>
      </Touchable>
    </div>
  );
}

export default purify(Menu);