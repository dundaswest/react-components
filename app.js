var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceries={['Apple', 'Orange']} />
  </div>
);

var Apple = (props) => (
  <li>{props.grocery}</li>
);

var Orange = (props) => (
  <li>{props.grocery}</li>
)

// var GroceryListItem = (props) => (
//   <li>
//     {props.grocery}
//   </li>
// );

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem key={`key-${grocery}`} grocery={grocery} />
    )}
  </ul>
);



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }

  onMouseTestFunction() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
     var style = {
      'font-weight': this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onMouseTestFunction.bind(this)}>{this.props.grocery}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



