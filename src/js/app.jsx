import React from 'react';


export default class App extends React.Component {
  // your Javascript goes here
  
  // Define a constructor method to intialize the state of the app. Add a prop for each input field to the state object and set their initial values.
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: '15',
      output: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // Define a function to update state values when an input changes, using event binding. Once in place go to HTML and add onChange event to each of the input element that calls this new method.
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // Define a calculate functiom to determine the mortgage payment and then set state to bind the result to the div with an id output as a string("blah is your monthly payment").
  // function should have 3 parameters: balance, rate, term
  // return to HTML and add an onCLick even to this buttin that calls the calculate function while passing the state object as an argument
  
  calculate(balance, rate, term) {
    rate = (rate / 12)/100;
    term = term * 12;
    
    let monthlyPayment = (rate * balance) / (1 - Math.pow((1 + rate), (-term)));

    return parseFloat(monthlyPayment.toFixed(2));
  }

  handleClick(event) {
    event.preventDefault();
    let result = this.calculate(this.state.balance, this.state.rate, this.state.term);
    this.setState({output: "$" + result + " is your monthly payment."});
  }

  
  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='text-center'>Mortgage Calculator</h1>
          <hr/>
        </div>
      <form className='form-horizontal'>
        <div className='form-group'>
          <label htmlFor='inputBalance' className='col-sm-2 control-label'>Loan Balance</label>
          <div className='col-sm-10'>
            <div className='form-group-addon'></div>
            <input name='balance' type='number' value={this.state.balance} onChange={this.handleInputChange} className='form-control' id='inputBalance' />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputRate' className='col-sm-2 control-label'>Interest Rate (%)</label>
          <div className='col-sm-10'>
            <input name='rate' type='number' step='0.01' value={this.state.rate} onChange={this.handleInputChange} className='form-control' id='inputRate' />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='term' className='col-sm-2 control-label'>Loan Term (years)</label>
          <div className='col-sm-10'>
            <select name='term' type='select' value={this.state.term} onChange={this.handleInputChange} className='form-control' id='term' >
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <div className='col-sm-offset-2 col-sm-10'>
            <button name='submit' type='submit' onClick={this.handleClick} className='btn btn-primary'>Calculate</button>
          </div>
        </div>
        <div name='output' id='output'>{this.state.output}</div>
      </form>
           
    </div>
    );
  }
}
