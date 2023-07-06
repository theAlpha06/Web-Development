import profile from '../images/IMG_20221231_014901_062.jpg'
export default function detail() {
    return (
        <div className="detail">
            <img src={profile} alt="profile_image"/>
            <div className='designation'>
                <h2>Shubham Singh</h2>
                <p>Web Developer</p>

            </div>
            <div className="button">
            <a href='mailto:shubhamsinghmau2@gmail.com' className='email'><i class="fa-solid fa-envelope"></i> <span className='email'>Email</span></a>
            <a href='https://www.linkedin.com/in/thealphacoder/' className='linkedin'><i class="fa-brands fa-linkedin"></i> <span className='linkedin'>Linkedin</span></a>
        </div>
        </div>
    )
}