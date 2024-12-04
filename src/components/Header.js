import trollFace from '../images/TrollFace.png';

export default function Header() {
  return (
    <>
      <header>
        <img src={trollFace} alt="trollface" />
        <h1>Meme Generator</h1>
        <p>React project - 3</p>
      </header>
    </>
  )
}