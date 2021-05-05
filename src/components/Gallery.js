import React from 'react';
import './Gallery.css';

const imgUrls = [
  './images/art/fika2.png',
  './images/art/donut.png',
  './images/art/2beer.png',
  './images/art/ipa_label.png',
  './images/art/paverka_industrin.png',
  './images/art/lovehate.png',
  './images/art/dahlia.png',
  './images/art/fish2.png',
  './images/art/dtiys2.png',
  './images/art/IMG_2499e.jpg',
  './images/art/sangria.png',
  './images/art/Cryptocurrency.png'
];

const imgTexts = [
  'This image I have created from scratch in Blender.',
  'Here is a close up of the donut that I made in Blender.',
  'I made Mikkeller inspired beer labels for my friends who moved to Australia.',
  'Me and my boyfriend brewed our own IPA and together we designed the label and graphic profile for our home brewery.',
  'Illustration in Osqledaren #4 19/20 for the article Även stora företag behöver ställas till svars för sina handlingar.',
  'Illustration in Osqledaren #3 18/19 for the article Sektionerna tycker till om THS.',
  'Illustration made with Promarkers-pens.',
  'Illustration made with aquarelle colors and pen.',
  'This is a draw this in your style-challenge piece. The image to the left is my version of the original image to the right.',
  'This is another piece for a draw this in your style-challenge.',
  'Illustration in Osqledaren #4 17/18 for the article M i Madrid.',
  'Illustration in Osqledaren #2 19/20 for the article Utmanarna till Bitcoin.'
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
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
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className="gallery-container" id='art'>
        <h1 className='title'>Art</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
          
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imgUrls.length} 
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
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src, imgText } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal">
          <div className='modal-body'>
            <a href="/" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="/" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="/" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img className='gallery-img-open' src={src} alt='gallery-img' /><br/>
            <span style={{color:'#fff'}}>{imgText}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
/*ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));*/