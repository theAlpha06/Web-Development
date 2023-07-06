export default function jokesData(props) {
    return (
        <>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {props.punchline && <p>{props.punchline}</p>}
            <hr />
        </>
    )
}