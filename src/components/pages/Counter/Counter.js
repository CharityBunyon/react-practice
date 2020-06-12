import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
  state = {
    count: 1,
    // imageUrl: 'https://picsum.photos/200',
  }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: 'bold',
  // }

  render() {
    let classes = ' badge, m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';

    return (
            <div>
              {/* <img src={this.state.imageUrl} alt=""/> */}
                <span className={classes}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
