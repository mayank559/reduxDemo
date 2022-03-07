import * as ReactDOM from "react-dom";
import React from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from 'react'
import './playerlist.css'
import { connect } from 'react-redux'
import { buyPlayer, removePlayer } from './redux/mylist/mylist-actions'







const Player_list = (buyPlayer,removePlayer) => {
  // const [value,setValue]=useState('');
  // const handleSelect=(e)=>{
  //   console.log(e);
  //   setValue(e)
  //   buyPlayer(value.playerId)
  // }
  const [team, setTeam] = useState({
    objectArray: [
      { key: "Rohit Sharma   -->10rs", ca: "India", playerId: 1, price: "10rs" },
      { key: "Virat Kohli    -->20rs", ca: "India", playerId: 2, price: "20rs" },
      { key: "KL Rahul       -->30rs", ca: "India", playerId: 3, price: "30rs" },
      { key: "SuryaKumar Yadav  -->40rs", ca: "India", playerId: 4, price: "40rs" },
      { key: "Rishab Pant", ca: "India" },
      { key: "Venkatesh Iyer", ca: "India" },
      { key: "Ravindra Jadeja", ca: "India" },
      { key: "Jaspreet Bumrah", ca: "India" },
      { key: "Mohommad Shami", ca: "India" },
      { key: "Kuldeep Yadav", ca: "India" },
      { key: "Bhuvneshwar Kumar", ca: "India" },
      { key: "Aaron Finch", ca: "Australia" },
      { key: "David Warner", ca: "Australia" },
      { key: "Steve Smith", ca: "Australia" },
      { key: " Matthew Wade", ca: "Australia" },
      { key: "Glenn Maxwell", ca: "Australia" },
      { key: "Marcus Stoinis", ca: "Australia" },
      { key: "Pat Cummins", ca: "Australia" },
      { key: "Josh Hazlewood", ca: "Australia" },
      { key: "Josh Inglis", ca: "Australia" },
      { key: " Adam Zampa", ca: "Australia" },
      { key: "Kane Richardson", ca: "Australia" },
      { key: "Jonny Bairstow", ca: "England" },
      { key: "Dawid Malan", ca: "England" },
      { key: "Haseeb Hameed", ca: "England" },
      { key: "Joe Root", ca: "England" },
      { key: "Rory Burns", ca: "England" },
      { key: "Moeen Ali", ca: "England" },
      { key: "Ollie Pope", ca: "England" },
      { key: "Chris Woakes", ca: "England" },
      { key: "James Anderson ", ca: "England" },
      { key: " Ollie Robinson", ca: "England" },
      { key: "Craig Overton", ca: "England" },
      { key: "Quinton De Cock", ca: "SouthAfrica" },
      { key: "Temba Bavuma", ca: "SouthAfrica" },
      { key: "Bjorn Forttuin", ca: "SouthAfrica" },
      { key: "Reeza Hendricks", ca: "SouthAfrica" },
      { key: "Heinrick Klassen", ca: "SouthAfrica" },
      { key: "Keshav Maharaj", ca: "SouthAfrica" },
      { key: "Aiden Markaram", ca: "SouthAfrica" },
      { key: "David Miller", ca: "SouthAfrica" },
      { key: "Wiaan Mulder", ca: "SouthAfrica" },
      { key: "Lungi Ngidi", ca: "SouthAfrica" },
      { key: "Kagiso Rabada", ca: "SouthAfrica" },
      { key: "Babar Azam", ca: "Pakistan" },
      { key: "Mohammad Rizwan", ca: "Pakistan" },
      { key: "Imad Wasim ", ca: "Pakistan" },
      { key: "Mohammad Nawaz", ca: "Pakistan" },
      { key: "Khushdil Shah", ca: "Pakistan" },
      { key: "Mohammad Hafeez", ca: "Pakistan" },
      { key: "Shadab Khan ", ca: "Pakistan" },
      { key: "Azam Khan", ca: "Pakistan" },
      { key: "Mohammad Wasim", ca: "Pakistan" },
      { key: "Shaheen Shah Afridi", ca: "Pakistan" },
      { key: "Sohaib Maqsood", ca: "Pakistan" },
      { key: "Shai Hope", ca: "WestIndies" },
      { key: "Brandon King", ca: "WestIndies" },
      { key: "Darren Bravo", ca: "WestIndies" },
      { key: "Shamarh Brooks", ca: "WestIndies" },
      { key: "Nicholas Pooran", ca: "WestIndies" },
      { key: "Kieron Pollard", ca: "WestIndies" },
      { key: "Jason Holder", ca: "WestIndies" },
      { key: "Akeal Hosein", ca: "WestIndies" },
      { key: "Romario Shepherd", ca: "WestIndies" },
      { key: " Hayden Walsh", ca: "WestIndies" },
      { key: "Alzarri Joseph", ca: "WestIndies" },
      { key: "Kane Williamson", ca: "New Zealand" },
      { key: "Martin Guptill", ca: "New Zealand" },
      { key: "Jimmy Neesham", ca: "New Zealand" },
      { key: "Devon Conway", ca: "New Zealand" },
      { key: "Mark Chapman", ca: "New Zealand" },
      { key: "Glenn Phillips", ca: "New Zealand" },
      { key: "Mitchell Santner ", ca: "New Zealand" },
      { key: "Ish Sodhi", ca: "New Zealand" },
      { key: "Tim Southee", ca: "New Zealand" },
      { key: "Adam Milne", ca: "New Zealand" },
      { key: "Lockie Ferguson", ca: "New Zealand" }
    ]
  });



  return (
    <div>
      <div style={{ width: '300px' }}>
        <i><h4>Select your 11 players from different countries</h4></i>
        
        <Multiselect


          options={team.objectArray}
          displayValue="key"
          groupBy="ca"
          showCheckbox={true}
          // onSelect={handleSelect}
          // onRemove={this.onSelect}
         
          
        />
        
      </div>
     

    </div>
  )
  
}

const mapDispatchToProps = dispatch => {
  return {
    buyPlayer: (playerId) => dispatch(buyPlayer(playerId))



  }
  return {
    removePlayer: (playerId) => dispatch(removePlayer(playerId))



  }
}
export default connect(null, mapDispatchToProps)(Player_list)