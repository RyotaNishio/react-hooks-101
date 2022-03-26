import {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const increment2 = () => setCount(previousCount => previousCount+1)
    const decrement2 = () => setCount(previousCount => previousCount-1)
    const reset = () => setCount(0)
    const double = () => setCount(count*2)
    const divide = () => setCount(count %  3 === 0 ? count / 3 : count)





    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
            </div>
            <div>
                <button onClick={double}>double</button>
            </div>
            <div>
                <button onClick={divide}>divide</button>
            </div>
        </>
    );
}

export default App;
