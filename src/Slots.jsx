import './Slots.css'
export default function Slots({v1, v2, v3}) {
   const values = [v1, v2, v3];
   const isWinner = values.every(val => val === values[0]);
   const styles = {color : isWinner ? 'green' : 'red'};
   const winner = <div>
    <h3 style ={styles}>You Win</h3>
    <h2>Congrats</h2>
   </div>

   const loser = <div>
    <h3 style={styles}>You Lose</h3>
   </div>

    return (
        <div className='Slots'>
            {/* <h2>Slot Machine Exercise</h2> */}
            <h2>{values}</h2>

            {isWinner ? winner : loser}         
        </div>
    )
}