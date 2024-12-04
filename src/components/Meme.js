import React from "react";
// import Memes from "../memesData";


export default function Meme() {
  // let [url, setUrl] = React.useState('https://i.imgflip.com/25w3.jpg');
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemesArray, setAllMemesArray] = React.useState()
  function getMemeImg() {
    const memeArray = allMemesArray.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme(prev => ({ ...prev, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(data => data.json())
      .then(data => setAllMemesArray(data))
  })

  return (
    <form className="meme-form">
      <div className="inputs">
        <div className="up">
          <label htmlFor="up">Top text</label>
          <input
            type="text"
            name="topText"
            id="up"
            onChange={handleChange}
            value={Meme.topText}
          />
        </div>
        <div className="down">
          <label htmlFor="down">Bottom text</label>
          <input
            type="text"
            name="bottomText"
            id="down"
            onChange={handleChange}
            value={Meme.bottomText}
          />
        </div>
      </div>
      <button type="button" className="form--button" onClick={getMemeImg}>Get a new meme image 🛒</button>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt='meme-image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </form>
  )
}