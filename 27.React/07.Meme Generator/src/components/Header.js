import '../styles.css'
export default function Header() {
    return(
        <>
            <header className="header">
                <img className="header--image" src="./images/troll-face.png" alt="troll-face"/>
                <h1 className="header--title">Meme Generator</h1>
                <p className="header--project">React Project - 3</p>
            </header>
        </>
    )
}