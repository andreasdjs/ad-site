import React from 'react';
import FooterItem from './FooterItem';

class FooterBox extends React.Component {
  render() {
    return (
      <div className="footer-box tk-museo-sans">
        <FooterItem />
        <FooterItem />
        <FooterItem />
        {/* <p>LINK SOCIAL MEDIA 1</p>
        <p>LINK SOCIAL MEDIA 2</p>
        <p>LINK SOCIAL MEDIA 3</p> */}
      </div>
    );
  }
}

export default FooterBox;
