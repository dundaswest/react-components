var App = (props) => (
  <div>
    <h2>My Todo List</h2>
    <GroceryListItem todo={['Apple']}/>
  </div>
);

var Apple = () => (
  <div>Apple</div>
)
var Orange = () => (
  <div>Orange</div>
)


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textWeight: this.state.done ? 'bold' : 'none'
    };
    return (
      <li style={style} onHover={this.onListItemHover.bind(this)}>{this.props.todo}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


