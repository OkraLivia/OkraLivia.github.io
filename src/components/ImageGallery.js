import React from 'react';
import './ImageGallery.css';

const imgUrls = [
  './images/wedding-invite.png',
  './images/wedding-website.png'
];

const imgTexts = [
  'The invitation.',
  'The wedding website landing page on mobile and desktop.'
];

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)} key={index}>
        <img src={src} key={src} className='image-gallery-img' alt='project imgage'/>
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
      <div className="image-gallery-container" id='art'>
        <div className="image-gallery-grid">
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
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
  }
  render () {
    const { closeModal, src, imgText } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="image-modal-overlay" onClick={closeModal}></div>
        <div className="image-modal">
          <div className='image-modal-body'>
            <a href="/" className='image-modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            <img className='image-gallery-img-open' src={src} alt='gallery-img' /><br/>
            <span className='img_caption'>{imgText}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageGallery;