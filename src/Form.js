import React from "react";

class Form1 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      lifeStory: "Please write your lifestory here :)",
      freeTicket: true,
      gender: "",
      favPet: "Bearded Dragon"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // with destructuring to prevent bugs
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  render() {
    return (
      <form>
        <label>
          First Name&nbsp;
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="Enter Here"
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Last Name&nbsp;
          <input
            type="text"
            name="lastName"
            placeholder="Enter Here"
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        {/**
         * Other useful form elements:
         *
         *  <textarea /> element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements
         */}
        <textarea
          onChange={this.handleChange}
          name="lifeStory"
          value={this.state.lifeStory}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="freeTicket"
            checked={this.state.freeTicket}
            onChange={this.handleChange}
          />
          Would you like a free ticket to Appleton Farms?
        </label>
        <br />

        <label id="gender">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />

        <label id="petChoice">
          Desired Pet &nbsp;
          <select
            name="favPet"
            value={this.state.favPet}
            onChange={this.handleChange}
          >
            <option value="Beared Dragon">Beared Dragon</option>
            <option value="Guinea Pig">Guinea Pig</option>
            <option value="Parrot">Parrot</option>
            <option value="Tortoise">Tortoise</option>
            <option value="Ferret">Ferret</option>
            <option value="Goldfish">Goldfish</option>
          </select>
        </label>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default Form1;
