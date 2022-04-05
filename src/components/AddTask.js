import React, {Component} from 'react';
import './AddTask.css'
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };
  handleDate = (e) =>{
      this.setState({ 
          date: e.target.value  
        });

  }
  handleText = (e) => {
      this.setState({ 
          text: e.target.value 
        });
  }
  handleCheckBox = (e) => {
      this.setState({ 
          checked: e.target.value  
        });
  }
  handleClick = (e) => {
      console.log('dodaj');
      const {text, checked, date} = this.state
      const add = this.props.add(text, date, checked)
      if (add) {
          this.setState({ 
              text: '',
            checked: false,
            date : this.minDate,
        });
      }

  }

  render() {
      
      let maxDate = this.minDate.slice(0,4) * 1 + 1
      maxDate = maxDate + '-12-31'
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text} onChange={this.handleText}
        />
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckBox}/>
        <label htmlFor="important">Priorytet </label>
        <br />
        <label htmlFor="date"> Do kiedy zrobić: </label>
        <input className='data'
        onChange={this.handleDate}
          type="date"
          name=""
          id=""
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}
 
export default AddTask;