import React, { Component } from 'react';

import PracticeChild from "./PracticeChild";

const styles = {
    border: '1px solid #ddd',
    borderRadius: 5,
    margin: '0 auto',
    padding: 15,
    textAlign: 'center'
}

const listContainer = {
    textAlign: 'left'
}

const listItem = {
    cursor: 'pointer'
}

const buttonStyle = {
    border: 'none'
}

export default class Practice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Joe',
            nickname: 'The Mighty Joe',
            age: 29,
            location: 'Frisco',
            intern: true,
            todo: ['onboarding', 'text/email notifications', 'Coder Dojo'],
            food: {
                breakfast: ['oatmeal', 'eggs', 'turkey sausage'],
                lunch: ['rotisserie chicken sub'],
                dinner: ['Grilled Chicken', 'Steam Veggies', 'Rice', 'Baked Potato']
            },
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: 'Joe Warren'
        })
    }

    // Destructuring State
    render() {
        const {
            name,
            nickname,
            age,
            location,
            intern,
            todo,
            food
        } = this.state

        return (
            <div style={styles}>
                <h2>{name}</h2>
                <button style={buttonStyle} onClick={this.handleClick}>Full Name</button>
                <p>Also known as '{nickname}.'</p>
                <ul style={listContainer}> Dinner
                    {food.dinner.map(food =>
                        <li key={food} style={listItem} onClick={() => console.log('clicked item')}>{food}</li>
                )}
                </ul>
                <PracticeChild location={location}/>
            </div>
        )
    }
}

