import React from "react";
import CheckBoxes from "./Components/CheckBoxes";
import RadioButtons from "./Components/RadioButtons";
import Textarea from "./Components/Textarea";
import Select from "./Components/Select";
import Account from "./Components/Account";

class Content extends React.Component {
  state = {
    radioGroup: {
      angular: false,
      react: true,
      vue: false
    },
    checkBoxGroup: {
      node: false,
      react: true,
      express: false,
      mongodb: false
    },
    description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
    selectedValue: 'node',
    selectedMultipleValue: ['ruby'],
    accountNumber: ''
  };
  handleRadio = event => {
    let obj = {...this.state.radioGroup};
    for (let key in obj) {
      if (key === event.target.value) {
        obj[event.target.value] = event.target.checked;
      } else {
        obj[key] = false;
      }
    }
    this.setState({radioGroup: obj});
  };
  handleCheckbox = event => {
    let obj = {...this.state.checkBoxGroup};
    obj[event.target.value] = event.target.checked;
    this.setState({
        checkBoxGroup: obj
      }
    )
  };
  handleChange = event => {
    this.setState({
      description: event.target.value
    })
  };
  handleSelectChange = event => {
    console.log(event.target.value);
    
    this.setState({
      selectedValue: event.target.value
    })
  };
  handleSelectMultipleChange = event => {
    const tarValue = event.target.value;

    if(this.state.selectedMultipleValue.some(value => value === tarValue)){
      this.setState(state => ({
          selectedMultipleValue: state.selectedMultipleValue.filter(value => value !== tarValue)
        })
      ) 
    } else {
      this.setState(state => ({
          selectedMultipleValue: [...state.selectedMultipleValue, tarValue] 
        })
      )
    }
  }
  handleAccountNumberChange = event => {
    this.setState({
      accountNumber: event.target.value.replace(/[^0-9]/gi, "")
    })
  };

  render() {
    return (
      <form>
        <RadioButtons radioGroup={this.state.radioGroup}
                      handleRadio={this.handleRadio} />
        <hr/>
        <CheckBoxes checkBoxGroup={this.state.checkBoxGroup}
                    handleCheckbox={this.handleCheckbox} />
        <hr/>
        <Textarea description={this.state.description}
                  handleChange={this.handleChange} />
        <hr/>
        <Select selectedValue={this.state.selectedValue}
                handleSelectChange={this.handleSelectChange}
                multiple={false} />
        <hr/>
        <Select selectedValue={this.state.selectedMultipleValue}
                handleSelectChange={this.handleSelectMultipleChange}
                multiple={true} />
        <hr />
        <Account
          handleChange={this.handleAccountNumberChange}
          accountNumber={this.state.accountNumber}
        />
      </form>
    );
  }
}

export default Content;
