import React from "react";
import axios from "axios";

import "../../css/dashboard.css";
import PredictTag from "./predicttag.component";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        title: "",
        body: "",
      },
      tags: [],
    };
  }
  handleChange(e) {
    const input = { ...this.state.input };
    input[e.currentTarget.name] = e.currentTarget.value;
    //if input are empty set tag accordingly and updating whether to show PredictTag comp or not
    if (input.title.trim() === "" || input.body.trim() === "") {
      this.setState({
        tags: [],
      });
    }
    this.setState({
      input,
    });
  }
  async handleClick(e) {
    e.preventDefault();
    const { input } = this.state;
    //splitting the input text
    const splitTitle = input.title.split(" ");
    const splitBody = input.body.split(" ");
    //concatening to form new array
    const newArr = splitTitle.concat(splitBody);
    //calling api
    const datas = await axios.get(
      "https://api.stackexchange.com/2.2/tags?site=stackoverflow"
    );
    //extract name of tag
    const tags = datas.data.items.map((item) => item.name);
    //filtering only tag recieved from input
    const newTag = tags.filter((tag) => newArr.includes(tag));
    this.setState({
      tags: newTag,
    });
  }
  render() {
    const { input, tags } = this.state;
    return (
      <div className="dash_container">
        <section className="dash_input">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={input.title}
              onChange={this.handleChange.bind(this)}
              placeholder="Title for searching tag"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="5"
              className="form-control"
              value={input.body}
              onChange={this.handleChange.bind(this)}
              placeholder="Body for searching tag"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={this.handleClick.bind(this)}
          >
            Search Tag
          </button>
        </section>
        <section>
          {tags && tags.length > 0 && <PredictTag input={input} tags={tags} />}
        </section>
      </div>
    );
  }
}

export default DashBoard;
