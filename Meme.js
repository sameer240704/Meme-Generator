import memedata from './memeData';
import React, {useState} from 'react';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "https://a.pinatafarm.com/500x281/f24659612b/shut-up-and-take-my-money-fry.jpg"
    })
    const [memeImage, renderMemeImage] = useState(memedata)

    function getMemeImage() {
        const memeArray = memeImage.data.memes
        const random = (Math.floor(Math.random() * memeArray.length))
        const memeURL = memeArray[random].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memeURL
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(meme)
    }

    return (
        <main className='main-form'>
            <div className="main--form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-text" 
                    placeholder="Top Text" 
                    name="topText" 
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form-text" 
                    placeholder="Bottom Text" 
                    name="bottomText" 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />
                <button 
                    className="form-button" 
                    onClick={getMemeImage} >
                        Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt='Meme Img' className='meme-image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}