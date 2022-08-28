import {Component} from 'react';

class Counting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      merdeka: true,
      name: '',
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
      merdeka: !this.state.merdeka,
    });
  }

  decrease() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
        merdeka: !this.state.merdeka,
      });
    }
  }

  reset(){
    this.setState({
            count:0,
            merdeka: true
    })
  }

  handleChange(event){
    this.setState({
        name: event.target.value,
    })
  }

  render() {
    return (
      <>
        <div style={{border: "1px solid blue", padding: "10px",borderRadius: "10px"}}>
        <h2>Counting 1</h2>
        <p>{this.state.merdeka.toString()}</p>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>Tambah</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrease}>Kurang</button>
        <input onChange={this.handleChange}></input>
        <p>Hello, {this.state.name}</p>
        </div>
      </>
    );
  }
}

export default Counting;
