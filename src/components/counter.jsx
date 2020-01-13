import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
    //   <div>
    //     <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
    //     <button className="btn btn-secondary btn-sm">Increament</button>
    //   </div>
      <div>
          {this.renderTags()}
      </div>
    );
  }

  getBadgeClassess() {
    let classess = "badge m-2 badge-";
    classess += this.state.count === 0 ? "warning" : "primary";
    return classess;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
