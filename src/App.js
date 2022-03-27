import {useState} from 'react'

const App = props => {
    const initialStates = {
        name: 'sample',
        price: 1000
    }

    const reset = () => {
        setPrice(initialStates.price)
        setName(initialStates.name)
    }

    const [name, setName] = useState(initialStates.name)
    const [price, setPrice] = useState(initialStates.price)
    return (
    <>
        <p>現在の{name}は、{price}円です。</p>
        <button onClick={() => setPrice(price + 1)}>+1</button>
        <button onClick={() => setPrice(price - 1)}>-1</button>
        <button onClick={reset}>reset</button>
        <input value={name} onChange={e => setName(e.target.value)}/>
    </>
    );
}

export default App;
