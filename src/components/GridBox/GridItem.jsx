import React from 'react';

class GridItem extends React.Component {
  render() {
    let gritItem = {
      title: 'TITLE TEXT',
      subtitle: 'SUBTITLE'
    }
    return (
      <div className="grid-item tk-museo-sans">
        <h3>{ this.props.title }</h3>
        <h5>{ this.props.subtitle }</h5>
      </div>
    );
  }
}

export default GridItem;
