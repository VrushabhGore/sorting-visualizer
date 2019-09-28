import React, { Component } from 'react';
import Line from './Line'
import './App.css';
import { Jumbotron, Button, Dropdown, DropdownButton, Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      counter: 0,
      loading: false
    }

    this.bubblesort = this.bubblesort.bind(this);
    this.selectionsort = this.selectionsort.bind(this);
    this.reset = this.reset.bind(this);
    this.shuffle = this.shuffle.bind(this);

  }

  //Bubble Sort Algorithms
  bubblesort() {
    let arr = this.state.lines;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    this.setState(st => ({
      lines: arr,
      counter: st.counter + 1,
      loading: true
    }))
    if (this.state.counter < arr.length) {
      setTimeout(this.bubblesort, 50);
    } else {
      this.setState({
        loading: false
      })
    }
  }


  selectionsort() {
    let arr = this.state.lines;
    var i = this.state.counter
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }

    this.setState(st => ({
      lines: arr,
      counter: st.counter + 1,
      loading: true
    }))
    if (this.state.counter < arr.length) {
      setTimeout(this.selectionsort, 50);
    } else {
      this.setState({
        loading: false
      })
    }
  }

  componentDidMount() {
    this.reset();
  }

  shuffle(array) {
    this.setState(st => ({
      loading: true
    }))
    var tmp, current, top = array.length;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  reset() {
    for (var a = [], i = 0; i < 35; ++i) a[i] = i;
    a = this.shuffle(a);
    this.setState({
      lines: a,
      counter: 0,
      loading: false
    })
  }



  render() {
    let lines = this.state.lines.map(line => {
      return <Line height={line} />
    });
    return (
      <div className="App">

        <Jumbotron>
          <h1>Visualize Sorting</h1>
          <p>
            This app allows you to visualize various Sorting Algorithms in real time.
          </p>
          <Dropdown>
            <DropdownButton disabled={this.state.loading} id="dropdown-basic-button" title="Sort Algorithms">
              <Dropdown.Item onSelect={this.bubblesort}>Bubble Sort</Dropdown.Item>
              <Dropdown.Item onSelect={this.selectionsort}>Selection Sort</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
          <Button variant='primary mt-2' disabled={this.state.loading} onClick={this.reset}>Create new array</Button>       
        </Jumbotron>
        <Container style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'50vh',height:'60vh'}}>
        {lines}
        </Container>
      </div>
    );
  }
}

export default App;
