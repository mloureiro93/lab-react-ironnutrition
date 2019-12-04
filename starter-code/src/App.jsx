import React, { Component } from 'react';
import './App.scss';
import FoodBox from './components/foodbox/Foodbox';
import foods from './foods.json';
import Form from "./components/form/Form"

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    foods: foods,
    showForm: false 
  };
  this.toggleForm = this.toggleForm.bind(this);
}

toggleForm(){
  this.setState({
    showForm: !this.state.showForm
  });
}
  
  addFoodToList = food => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy
    });
  };
  
   render() {
    return (
      <div className="App">
      <button className="toggle" onClick={this.toggleForm}>Add New Food </button>
      { this.state.showForm && 
        <Form addFood={this.addFoodToList} /> }

        {this.state.foods.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
    );
  }
}
export default App;

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             food: foods,
//             name: this.props.name,
//             calories: this.props.calories,
//             image: this.props.image
//             // newFood: []
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.addFoodToList = this.addFoodToList.bind(this);
//     }
//     handleInputChange(event) {
//         const image = event.target.value;
//         const name = event.target.value;
//         const calories = event.target.value;
//         this.setState({
//             name: name,
//             calories: calories,
//             image: image
//         });
//     }
//     addFoodToList(event) {
//         event.preventDefault();
//         const added = {
//             name: this.state.name,
//             calories: this.state.calories,
//             image: this.state.image
//         };
//         // const name = this.state.name;
//         // const calories = this.state.calories;
//         // const images = this.state.image;
//         this.setState({
//             food: [...this.state.food, added]
//         });
//     }
//     render() {
//         // const foods = this.state.foods;
//         return (
//             <div className="App">
                
//             </div>
//         );
//     }
// }
// export default App;


