import React from 'react';

class SocialMediaItem extends React.Component {
  render() {
    return (
      <a href={ this.props.link } target="_blank" className="socialmedia-item">
        <div className="footer-item tk-museo-sans">
          { this.props.title }
        </div>
      </a>
    );
  }
}

export default SocialMediaItem;
