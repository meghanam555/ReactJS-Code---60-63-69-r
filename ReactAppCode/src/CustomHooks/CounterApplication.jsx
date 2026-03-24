import useCounter from "./useCounter"

export default function CounterApplication(){
    const {count, increment, decrement, reset} = useCounter();
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button><br></br><br></br>
        <button onClick={decrement}>Decrement</button><br></br><br></br>
        <button onClick={reset}>Reset</button>
        </>
    )
}