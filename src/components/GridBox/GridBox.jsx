import React from 'react';
import GridItem from './GridItem';

class GridBox extends React.Component {
  render() {
    let gritItems = [
      {
        title: 'JavaScript',
        subtitle: 'Full Stack',
      },
      {
        title: 'Graphic Design',
        subtitle: 'Adobe, Sketch',
      },
      {
        title: 'Composing',
        subtitle: 'Electronic Music',
      },
    ];
    return (
      <div className="grid-box">
        { gritItems.map((item, index) => <GridItem key={index} title={item.title} subtitle={item.subtitle} />)}
      </div>
    );
  }
}

export default GridBox;
