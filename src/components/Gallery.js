import React from 'react';
import './Gallery.css';

const imgUrls = [
  './images/art/fika2.png',
  './images/art/donut.png',
  './images/art/2beer.png',
  './images/art/CALM-both.png',
  './images/art/my_bike.png',
  './images/art/ipa_label.png',
  './images/art/mango_ipa_label.png',
  './images/art/paverka_industrin.png',
  './images/art/lovehate.png', 
  './images/art/white_lady.png',
  './images/art/dahlia.png',
  './images/art/view.png',
  './images/art/yo2015.png',
  './images/art/grad_card2.png',
  './images/art/fish2.png',
  './images/art/stilleben.png',
  './images/art/window.png',
  './images/art/greenhouse.png',
  './images/art/dtiys2.jpg',
  './images/art/dtiys.png',
  './images/art/frogscene.png',
  './images/art/marimekko_portrait.png',
  './images/art/sangria.png',
  './images/art/Cryptocurrency.png'
];

const imgTexts = [
  "This image I have created from scratch in Blender. The rendering isn't perfect, I made it on my MacBook Air, a computer that isn't exactly optimized for such tasks to say the least...",
  'Here is a close up of the donut that I made in Blender.',
  'I made Mikkeller inspired beer labels for my friends who moved to Australia.',
  'The inspiration for this piece comes from an Instagram post I saw, it is a poster of things that I appreciate: sauna, swimming in the ocean, art, plants, coffee, strawberry cake and craft beer. It says "Enjoyt the little things" in Finnish and "A collection of moments" in Swedish. The left one is made in Adobe Illustrator after which I got feeling and decided to make a painted version of it (on the right) using acrylic colors.',
  'This is probably my biggest project ever and one that I really enjoyed working with, my red leopard bike. With the help from my boyfriend we took the bike apart and I spray painted it red and drew leopard spots on it with an oil based marker. It took HOURS but it was totally worth it.',
  'My boyfriend and I brewed our own IPA and together we designed the label and graphic profile for our home brewery, Tomkra Brewing. Our beer can be found on Untappd, just search for "Tomkra Brewing" 😎🍻',
  'The second brew from Tomkra Brewing, this time we made a dry hopped mango IPA and designed the label accordingly 🥭🍻',
  'This is an illustration in Osqledaren #4 19/20 for the article "Även stora företag behöver ställas till svars för sina handlingar". It is created in Illustrator.',
  'This is an illustration in Osqledaren #3 18/19 for the article "Sektionerna tycker till om THS". I made it with pen and aquarelle.',
  'This poster is made in Illustrator and it shows the ingredients that are needed for a White Lady, a drink that has been my favourite lately.',
  'This is an illustration made with Promarkers-pens and Uni Pin fineliners. Dahlias are one of my favourite flowers.',
  'This illustration I have made in Illustratior and it is an entry in a color palette challenge where the task is to create an artwork only using a predetermined and limited color palette.',
  'This is the invitation I made with aquarelle and Uni Pin fineliners for the celebration of me graduating from high school.',
  "Some years later it was my brother's turn to graduate from high school. The invitation is made with aquarelle and Uni Pin fineliners.",
  'This is an illustration made with aquarelle colors and and Uni Pin fineliners.',
  'I like drawing everyday things in my surrounding, this painting is of an after work beer and behing the glasses is a box of Domino-cookies, the Finnish version of Oreos which I prefer 😎 The painting is made with acrylics on 170g drawing paper.',
  'This is made in Procreate on an iPad using an Apple pencil, a completely new medium for me. It shows the view from the dining room at our summer cottage.',
  'This is made in Illustrator. This one is also of things in my surrounding but placed in a greenhouse. I really like the aesthetics of green plants together with the glass and metal in a greenhouse.',
  'This is a draw this in your style-challenge piece. The image to the left is my version of the original image to the right. It is made with pen and aquarelle.',
  'This is another draw this in your style-challenge piece. The image to the left is my version of the original image to the right. It is made with pen and aquarelle.',
  'This little scene is of a couple of frogs picking blueberries in the forest. The inspiration for this came from one of many trips to the forest my family and I make during the autumn to pick berries and mushrooms. It is made in Procreate.',
  "I've been wanting to get better at drawing people so I painted this Marimekko-appreciation kind of self portrait using aquarelles and pen.",
  'This is made in Illustrator and it is inspired by, or a remake of if you will, an illustration I made for the article "M i Madrid" in Osqledaren #4 17/18. It was part of the “Mat” section of the article, sangria feels like a must-do when visiting Spain 💃',
  'This is an illustration in Osqledaren #2 19/20 for the article "Utmanarna till Bitcoin".'
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
            <span className='img_caption'>{imgText}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
/*ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));*/