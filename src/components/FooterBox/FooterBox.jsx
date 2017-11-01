import React from 'react';
import SocialMediaItem from './SocialMediaItem';

class FooterBox extends React.Component {
  render() {
    let socialMediaItems = [
      {
        socialMedia: 'github',
        icon: '',
        link: 'https://github.com/andreasdjs/',
        title: 'GitHub',
      },
      {
        socialMedia: 'linkedin',
        icon: '',
        link: 'https://www.linkedin.com/in/andreasdagnell/',
        title: 'LinkedIn',
      },
      {
        socialMedia: 'soundcloud',
        icon: '',
        link: 'https://soundcloud.com/sushi_brother',
        title: 'Soundcloud',
      },
      {
        socialMedia: 'facebook',
        icon: '',
        link: 'https://www.facebook.com/AndreasDagnellPhotography/',
        title: 'Photography on Facebook',
      },
      {
        socialMedia: 'facebook',
        icon: '',
        link: 'https://www.facebook.com/pg/Sushi-Brother-7794636793/',
        title: 'Music on Facebook',
      },
    ];
    return (
      <div className="footer-box tk-museo-sans">
        { socialMediaItems.map((item, index) => <SocialMediaItem key={index} title={item.title} link={item.link} icon={item.icon} />)}
      </div>
    );
  }
}

export default FooterBox;
