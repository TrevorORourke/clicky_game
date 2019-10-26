import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

rearrange (friends){
  return friends.sort(function (a, b) { return (0.5 - Math.random()) })
 
  

}

clickHandle =(friendID)=> {
  console.log("click", friendID) 
  // check if card has been clicked before
  // update score 
  //rearrange
  const newfriends= this.rearrange(this.state.friends)
  // set state with new friends array

  this.setState({friends:newfriends})
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clickHandle={this.clickHandle}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
