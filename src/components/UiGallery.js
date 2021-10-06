import React from 'react';
import './Gallery.css';

const imgUrls = [
  './images/ui/daily_ui-01.png',
  './images/ui/daily_ui-02.png',
  './images/ui/daily_ui-09.png',
  './images/ui/daily_ui-04.png',
  './images/ui/daily_ui-05.png',
  './images/ui/daily_ui-06.png',
  './images/ui/daily_ui-07.png',
  './images/ui/daily_ui-03.png',
  './images/ui/404-page.gif'
];

const imgTexts = [
  'The promt was to design a weather application. My aim was to create a design that is clean and I really wanted to incorporate an image of each location. The saved places are listed at the top, swipe on the list to change location.',
  'The promt was to design an E-commerce shop displaying a single item. I choose to work with a chair, for each color option the solid background colorblock changes color accordingly. I thought it was a fun challenge to create a design for both mobile and desktop.',
  'The promt was to design a hotel booking application, I wanted to do a clean design with a easy-going feeling.',
  'The promt was to design a music player. The backround is a blurred and enlarged version of the album cover and I made the track component round like a CD, behind the currently playing song is smaller images of the previous and next track.',
  'The promt was to design a sign up page. I wanted to use bright but calm colors for this design. Maybe it is a sign up page for a spa?',
  'The promt was to design a user profile. Similar to the E-commerce shop, the colors are different depending on the image. The color theme changes to fit the uploaded image.',
  'The promt was to design a credit card checkout. I wanted to use peachy colors since they are colors that I am not very used to work with. I thought a shop selling bath and body related products would be suitable for the aesthetic.',
  'The promt was to design a home monitoring dashboard. It consist of different components that are interchangeable and I created a light mode and a dark mode for this task.',
  'The promt was to design a 404 page. I wanted to make a fun design, the image is a gif of Vincent Vega from Pulp Fiction where he is looking around with a confused expression.'
  ];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)} key={index}>
        <img src={src} key={src} className='gallery-img' alt='gallery-img'/>
      </div>
    ) 
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
  }
  render() {
    return (
      <div className="gallery-container" id='art'>
        <div className="ui-gallery-grid">
          {imgUrls.map(this.renderImageContent)}
          
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          src={imgUrls[this.state.currentIndex]}
          imgText={imgTexts[this.state.currentIndex]}
        />
      </div>
    )
  }
}

class GalleryModal extends React.Component {
  
  render () {
    const { closeModal, src, imgText } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal">
          <div className='ui-modal-body'>
            <a href="/" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            <img className='ui-gallery-img-open' src={src} alt='gallery-img' /><br/>
            <span className='img_caption'>{imgText}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
/*ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));*/