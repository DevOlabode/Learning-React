export default function ListPicker({values}){
    const randomIndex = Math.floor(Math.random() * values.length);
    const element = values[randomIndex]
    return (
        <div>
            <p>The List Of Values ; {values}</p>
            <p>Random Element is {element }</p>
        </div>
    )
}