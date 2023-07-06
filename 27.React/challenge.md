# Challenge 1
 * Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * Spoiler: the page won't update when new things get added
 * to the array!

```JS
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function addItems() {
        const thingText = `Thing ${thingsArray.length + 1}`;
        thingsArray.push(thingText);
    }
    
    return (
        <div>
            <button onClick={addItems}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

>Although, the above code seems to be right but, it doesn't renders the updated value of `thingsArray` because the thingsElement is only rendered once, when the `<App/>` component is rendered

This can be done using `React.useState()`. Here is an example:

```JS
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

# Challenge 2

* Replace our hard-coded "Yes" on the page with  some state initiated with React.useState()

```JS
import React from "react"

export default function App() {
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>Yes</h1>
            </div>
        </div>
    )
}

```
## Solution: 
```JS
import React from "react"

export default function App() {

    const result = React.useState("Yes")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
```
