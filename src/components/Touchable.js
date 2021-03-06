import React, { PureComponent } from 'react';

class Touchable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.setHover = this.setHover.bind(this);
    this.unsetHover = this.unsetHover.bind(this);
    this.setActive = this.setActive.bind(this);
    this.unsetActive = this.unsetActive.bind(this);
    this.setBoth = this.setBoth.bind(this);
    this.unsetBoth = this.unsetBoth.bind(this);
  }
  setHover() {
    this.setState({ isHover:true });
  }
  unsetHover(e) {
    this.setState({ isHover:false });
  }
  setActive() {
    this.setState({ isActive:true });
  }
  unsetActive() {
    this.setState({ isActive:false });
  }
  setBoth() {
     this.setState({ isActive:true, isHover:true, isBoth:true });
  }
  unsetBoth() {
    if(this.state.isBoth)
      this.setState({ isActive:false, isHover:false, isBoth:false });
  }
  componentDidMount() {
    this.el.addEventListener('mouseover', this.setHover);
    this.el.addEventListener('mouseout', this.unsetHover);

    this.el.addEventListener('mousedown', this.setActive);
    document.addEventListener('mouseup', this.unsetActive);

    this.el.addEventListener('touchstart', this.setBoth);
    document.addEventListener('touchmove', this.unsetBoth);
    document.addEventListener('touchend', this.unsetBoth);

    this.el.addEventListener('click', this.unsetBoth);
  }
  componentWillUnmount() {
    this.el.removeEventListener('mouseover', this.setHover);
    this.el.removeEventListener('mouseout', this.unsetHover);

    this.el.removeEventListener('mousedown', this.setActive);
    document.removeEventListener('mouseup', this.unsetActive);

    this.el.removeEventListener('touchstart', this.setBoth);
    document.removeEventListener('touchmove', this.unsetBoth);
    document.removeEventListener('touchend', this.unsetBoth);

    this.el.removeEventListener('click', this.unsetBoth);
  }
  render() {
    var { style, styleHover, styleActive, ...other } = this.props;
    var { isHover, isActive } = this.state;

    if(isActive && isHover && styleActive) {
        style = { ...style, ...styleActive };
    } else if(isHover && styleHover) {
        style = { ...style, ...styleHover };
    }

    return (
      <div ref={el => this.el = el} style={style} {...other}>
        {this.props.children}
      </div>
    )
  }
}

export default Touchable;
