import React, { Component } from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import styles from './DataFrame.css';

class DataFrame extends Component {

  constructor(props) {
    super(props);
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  }

  render() {
    const columns = ['Id', 'Name', 'Sex', 'Age', 'Height', 'Weight', 'Team', 'NOC', 'Game', 'Year', 'Season', 'City', 'Sport', 'Event', 'Medal'];
    const data = this.props.data;
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };
    return (
      <div className={styles.DataFrame}>
          <MUIDataTable
            title={"Olympic Athlete Event List"}
            data={data}
            columns={columns}
            options={options} />
      </div>
    )
  }

};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(DataFrame);
