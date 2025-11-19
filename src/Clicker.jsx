function handleClick(){
    console.log('CLICKED THE BUTTON')
}

function handleHover(){
    console.log('HOVERED')
}

export default function Cliker() {
    return (
        <div>
            <p onMouseOver={handleHover}>HHOVER OVER ME</p>
            <button onClick = {handleClick}>Click me</button>
        </div>
    )
}