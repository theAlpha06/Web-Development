# Props
>It refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." A component receiving props is not allowed to modify those props.(i.e. they are immutable)

# State
>It refers to values that are managed by the component, similar to variable declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

`useState()` array destructuring: 
```JS
const [whateverWeWant, setWhateverWeWant] = React.useState("Yes");
```

Note: If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use to determine new value of state.

### What are React's primary tasks?
    - Work with the DOM/browser to render UI to the page
    - Manage state for us between render cycles(i.e. state values are "remembered" from one rendered to the next)
    - Keep the UI updated whenever state changes occur

### What can't React handle to is own?
    - (Out)side effects!
        localStorage
        API/database interactions
        Subscriptions(e.g. web sockets)
        Syncing 2 different internal states together
        Basically anything that React isn't in charge of

    
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
    
```JS
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
```