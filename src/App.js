import {useState, useEffect} from 'react'

const App = () => {
    const initialStates = {
        name: 'sample',
        price: 1000
    }

    const [state, setState] = useState(initialStates)
    const {name, price} = state

    useEffect(() => {
        console.log('This is like componentDidMount or componentDidUpdate.')
    })

    useEffect(() => {
        console.log('This is like componentDidMount.')
    }, [])
    useEffect(() => {
        console.log('This callback is for name only.')
    }, [name])

    return (
        <>
            <p>現在の{name}は、{price}円です。</p>
            <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
            <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
            <button onClick={() => setState(initialStates)}>reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
        </>
    );
}

export default App;
