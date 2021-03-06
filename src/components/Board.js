import React, { PureComponent } from 'react';
import Tile from './Tile';
import { getClosestDim } from '../util';

const boardStyle = {
  flex:1,
  overflow:'hidden',
  flexDirection:'row',
  flexWrap:'wrap',
  border:'4px solid #eee',
};

class Board extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.onResize();
    var queued = false;
    window.addEventListener('resize', () => {
    if(queued) return;
      requestAnimationFrame(() => {
        this.onResize();
        queued = false;
      });
      queued = true;
    });
  }
  onResize() {
    var width = this.board.clientWidth;
    var height = this.board.clientHeight;

    this.setState({ dim:getClosestDim(width, height) });
  }
  render() {
    var props = this.props;
    var dim = this.state.dim;
    var tiles = props.tiles;
    var style = boardStyle;

    if(props.showAll) {
      tiles = [].concat(tiles).sort((a, b) => a.type.order - b.type.order);
    }

    if(props.loading) {
      style = { ...style, opacity:0.5 }
    }

    return (
      <div ref={(el) => this.board = el} style={style}>
        {dim && tiles.map((tile, i) => {
           return (
             <Tile
                key={tile.word}
                word={tile.word}
                type={tile.type}
                show={tile.show}
                showAll={props.showAll}
                width={dim.width}
                height={dim.height}
                onShow={props.onShow} />
           );
        })}
      </div>
    );
  }
}

export default Board;