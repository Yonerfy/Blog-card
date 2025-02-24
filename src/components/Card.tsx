
import illustration from '../assets/illustration-article.svg'
import imageAvatar from '../assets/image-avatar.webp'
const Card = () => {
    return (
        <div className="card">
            <img src={illustration} alt="random" />
            <span className='label'>Learning</span>
            <p className='date'>
                Published 21 Dec 2023
            </p>
            <h2 className='title'>
                HTML and CSS foundations
            </h2>
            <p className='description'>
                These languages are the building blocks of the web. Learn how to style and design your website.
            </p>
            <div className="avatar">
                <img src={imageAvatar} alt="" />
                <p>Greg Hooper</p>
            </div>
        </div>
    )
}

export default Card