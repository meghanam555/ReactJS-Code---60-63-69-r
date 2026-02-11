export function NestedComponents(){
    return(
        <>
        <h1>Hello Here, </h1>
        <HelloWorld />
        <Sunil />
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia molestias facere id sapiente voluptatum inventore aspernatur non modi rem rerum nesciunt eligendi quae dolore quas veniam, odit reiciendis illo perspiciatis.</h2>
        </>
    )
}
// export default NestedComponents;

export function HelloWorld(){
    return(
        <>
        <h3>Hello to the World</h3>
        </>
    )
}

export function Sunil(){
    return(
        <>
        <h2>Sunil is happy today</h2>
        <p>The reason is Sunil mets Sunila</p>
        </>
    )
}