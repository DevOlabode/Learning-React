const handleFormSubmit = (evt)=>{
    evt.preventDefault();
    console.log('Submitted the Form')
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}