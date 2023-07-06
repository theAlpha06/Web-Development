import mailLogo from '../images/mail-icon.png';
import phoneIcon from '../images/phone-icon.png';

export default function contact(props) {
    return (
        <div className="contact-card">
        <img src={props.img} alt={props.alt}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={phoneIcon} alt="Phone icon"/>
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={mailLogo} alt="Mail icon"/>
            <p>{props.email}</p>
        </div>
    </div> 
    )
}

// const person = {
    //     img: "./images/mr-whiskerson.png",
    //     name: "Mr. Whiskerson",
    //     phone: "(800) 555-1234",
    //     email: "mr.whiskaz@catnap.meow"
    // }
    
// Object Destructuring
// const {img, name} = person
// console.log(name)