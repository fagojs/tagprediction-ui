import React from "react";
import "../css/landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import CardTag from "./cardtag.component";
// import InputTag from "./input-tag.component";
// import Paginator from "./paginator.component";
// import { paginate } from "../utitlities/paginate";

import GetDatas from "../utitlities/tempData";
import DashBoard from "./dashboard/dashboard.component";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      currentPage: 1,
      pageSize: 4,
    };
  }

  componentDidMount() {
    const datas = GetDatas();
    this.setState({
      results: datas,
    });
  }

  //get page number and setting to currentPage
  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  handleChange(e) {
    this.setState(
      {
        query: e.target.value,
      },
      () => {
        const { query } = this.state;
        if (query && query.length > 0) {
          this.getInfo();
        }
      }
    );
  }
  getInfo() {
    //connect to tag backend
    const datas = GetDatas();
    this.setState({
      results: datas,
    });
  }

  render() {
    // const { query, results, pageSize, currentPage } = this.state;
    // const count = results.length;

    // let filteredData;
    // //query filtering
    // if (query) {
    //   filteredData = results.filter((data) => {
    //     //removing # from #header
    //     const newHeader = data.header.split(/\W/)[1];
    //     if (newHeader.toLowerCase().includes(query.toLowerCase())) {
    //       return data;
    //     }
    //     return filteredData;
    //   });
    // } else if (!query) {
    //   filteredData = results.map((data) => {
    //     return data;
    //   });
    // }
    // //received array after paginating data
    // const paginatedData = paginate(filteredData, currentPage, pageSize);

    return (
      <div className="page_layout">
        <DashBoard />
        {/* <div className="input_container">
          <InputTag handleChange={this.handleChange.bind(this)} />
        </div>
        <div className="card_container">
          <CardTag datas={paginatedData} />
        </div>
        <div className="paginator_container">
          <Paginator
            itemsCount={count}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange.bind(this)}
          />
        </div> */}
      </div>
    );
  }
}

export default LandingPage;
