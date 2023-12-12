function Parent()
{
    return(
    <div>
    <h1>hi i am parent</h1>
    <Child mark={1000}/>
    </div>
    )
}
function Child(props)
{
    return(
        <div>
           <p> i scored {props.mark}</p>
        </div>
    )
}
export default Parent;