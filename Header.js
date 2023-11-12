import memeface from './memeface.png';

export default function Header() {
    return (
        <div>
            <header className='header'>
                <img src={memeface} alt='Meme face' className='header-image' />
                <h2 className='header-left'>Meme Generator</h2>
                <h4 className='header-right'>React Course - Project 3</h4>
            </header>
        </div>
    );
}