import React from 'react';
import './Gallery.css';

const imgUrls = [
  './images/art/joulukortti2023.png',
  './images/art/du_ar_min_sol.png',
  './images/art/ylifemma_kukat.png',
  './images/art/my_bike-web.png',
  './images/art/fika2-web.png',
  './images/art/CALM-both-web.png',
  './images/art/ipa_label.png',
  './images/art/mango_ipa_label.png',
  './images/art/paverka_industrin-web.png',
  './images/art/lovehate-web.png', 
  './images/art/beer_poster.png',
  './images/art/stilleben-web.png',
  './images/art/greenhouse-web.png',
  './images/art/yo2015-web.png',
  './images/art/grad_card2-web.png',
  './images/art/marimekko_portrait-web.png',
  './images/art/dtiys-web.png',
  './images/art/dtiys3.png',
  './images/art/dahlia-web.png',
  './images/art/window.png',
  './images/art/my_plants.png',
  './images/art/his_plants.png',
  './images/art/frogscene.png',
  './images/art/view-web.png',
  './images/art/flower-collage.png',
  './images/art/fish2-web.png',
  './images/art/tomatosauce.png',
  './images/art/sangria-web.png',
  './images/art/pumpkinhead.png'
];

const imgTexts = [
  "I was comissioned to create the 2023 Christmas card for the Finnish embassy in Stockholm. The card was sent by the ambassador to the embassy's connections. Together we looked at some options I had sketched and finally the decision landed on this wintery scene where santa is having a sauna and a swim in the icy lake. The card is made using pen, aquarelle and Adobe Illustrator and was printed on matte paper.",
  'This is one of five winners in the Årets Kärlekshälsning contest held by Swish. My design will be available as a card in the Swish app during the entire year 2022. It is called "Du är min sol" (You are my sun) and is a homage to all the people in your life who makes your day a little bit sunnier.',
  'Inspired by my Swish card I wanted to continue the series of happy flowers. Here a peony and a pansy are high fiving, next to them is a Swedish saying that I thought would be fun to illustrate: "Blomma, blad, en miljard" which translates to "Flower, leaf, one billion". It rhymes in Swedish and it is a saying jokingly used by children when you have to count really far.',
  'This is probably my biggest project ever and one that I really enjoyed working with, my red leopard bike. With the help from my boyfriend we took the bike apart and I spray painted it red and drew leopard spots on it with an oil based marker. It took HOURS but it was totally worth it.',
  "This image I have created from scratch in Blender. Yes, it is the donut tutorial. The rendering isn't perfect, I made it on my MacBook Air, a computer that isn't exactly optimized for such tasks to say the least... Nonetheless, I'm happy with what I created!",
  'The inspiration for this piece comes from an Instagram post I saw, it is a poster of things that I appreciate: sauna, swimming in the ocean, art, plants, coffee, strawberry cake and craft beer. It says "Enjoyt the little things" in Finnish and "A collection of moments" in Swedish. The left one is made in Adobe Illustrator after which I got feeling and decided to make a painted version of it, on the right, using acrylic colors. The painting is a bit wonky, but I like it and it was really fun to recreate the digital piece using physical mediums.',
  'My boyfriend and I brewed our own IPA and together we designed the label and graphic profile for our home brewery, Tomkra Brewing. Our beer can be found on Untappd, just search for "Tomkra Brewing". Cheers! 😎🍻',
  'The second brew from Tomkra Brewing, this time we made a dry hopped mango IPA and designed the label accordingly 🥭🍻',
  'This is an illustration in Osqledaren #4 19/20 for the article "Även stora företag behöver ställas till svars för sina handlingar". Each segment of the magazine has its own color, this article was the segment divider in the "Bransch" segment which is orange. This illustration is created in Illustrator and I only used colors of different segments. The blue corresponds to the segment "English" and the green to "OL gräver".',
  'This is an illustration in Osqledaren #3 18/19 for the article "Sektionerna tycker till om THS". I made the flower blue to represent the logo of THS (Tekniska Högskolans Studentkår) which is a flower-like composition of seven blue circles linked together. I made it with pen and aquarelle.',
  'I wanted to create an artwork only using a very limited color palette. The result is this comic-style poster that is an ode to beer 🍻',
  'I like drawing everyday things in my surrounding. This painting is of an after work beer and behind the glasses is a box of Domino-cookies, the Finnish version of Oreos, which I prefer 😎 The painting is made with acrylics on 170g drawing paper.',
  'This is made in Illustrator. This one is also of things in my surrounding but placed in a greenhouse. I really like the aesthetics of green plants together with the glass and metal of a greenhouse.',
  'This is the invitation I made with aquarelle and Uni Pin fineliners for the celebration of me graduating from high school.',
  "Some years later it was my brother's turn to graduate from high school. The invitation is also made with aquarelle and Uni Pin fineliners.",
  "I've been wanting to get better at drawing people so I painted this Marimekko-appreciation kind of self portrait using aquarelles and pen.",
  'This is a draw this in your style-challenge piece. The image to the left is my version of the original image to the right. It is made with pen and aquarelle.',
  'This is another draw this in your style-challenge piece. I really like the concept of these challenges, you take a piece of art that someone else has made and think about how you can redo it in your own style. It is perfect for when you want to draw but do not know what. Mine is on the left and I made it in Procreate on an iPad.',
  'This is an illustration made with Promarkers-pens and Uni Pin fineliners. Dahlias are one of my favourite flowers.',
  'This is made in Procreate on an iPad using an Apple pencil, a completely new medium for me. It shows the view from the dining room at our summer cottage.',
  'I thought it would be a fun idea to create a picture of all of my houseplants placed in a greenhouse. The idea developed as I worked on the piece and it ended up containing plants and things from my home that would contribute to a cozy environment.',
  'Since I had so much fun creating the greenhouse related to my home, I wanted to do the same thing but with things that remind me of my partner - and his plants of course! 🪴',
  'This little scene is of a couple of frogs picking blueberries in the forest. The inspiration for this came from one of many trips to the forest my family and I make during the autumn to pick berries and mushrooms. It is made in Procreate.',
  'This illustration I have made in Illustratior and it is an entry in a color palette challenge where the task is to create an artwork only using a predetermined and limited color palette.',
  'This is a collage of a flower bouquet I made. I cut out the shapes from paper that I painted with gouach paints.',
  'This is an illustration made with aquarelle colors and and Uni Pin fineliners.',
  'Ingredients to a very delicious tomato sauce that the food blogger Sofia Wood has created: miso, garlic, tomato paste, passed tomatoes, olive oil, salt and pepper. Less is more. The sauce has become a staple in our kitchen, so I figured that I would honor it with an illustration. Bon appétit!',
  'This is made in Illustrator and it is inspired by, or a remake of if you will, an illustration I made for the article "M i Madrid" in Osqledaren #4 17/18. It was part of the “Mat” section of the article, sangria feels like a must-have when visiting Spain 💃',
  'I saw the cutest video of a child wearing a pumpkin on his head going by his business, so I just had to draw myself a lil pumpkinhead boy with his froggy friend 🎃'
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