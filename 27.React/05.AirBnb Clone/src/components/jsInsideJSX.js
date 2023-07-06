export default function props() {
    const firstName = "Shubham";
    const lastName = "Singh";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if(hours < 12 )
        timeOfDay = "morning";
    else if (hours >= 12 && hours < 16)
        timeOfDay = "afternoon";
    else if (hours >=16 && hours < 18)
        timeOfDay = "evening";
    else 
        timeOfDay = "night";
    return (
        <h1>Good {timeOfDay} {firstName} {lastName}!</h1>
    )
} 