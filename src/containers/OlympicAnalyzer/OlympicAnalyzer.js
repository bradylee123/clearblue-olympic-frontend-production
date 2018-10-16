import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actions';
import styles from './OlympicAnalyzer.css';

import InputData from '../InputData/InputData';
import MedalGraph from '../../components/MedalGraph/MedalGraph';
import TopSport from '../../components/Box/TopSport/TopSport';
import TopAthlete from '../../components/Box/TopAthlete/TopAthlete';
import BestCountry from '../../components/Box/BestCountry/BestCountry';
import AgeDistribution from '../../components/Box/AgeDistribution/AgeDistribution';
import DataFrame from '../../components/DataFrame/DataFrame';

class OlympicAnalyzer extends Component {

  constructor(props) {
    super(props);

    const teams = [];
    axios.get('http://localhost:5000/team')
    .then(res => {
      if (Array.isArray(res.data) && res.data.length) {
        res.data.map((record) => {
          teams.push({
            value: record.team,
            displayValue: record.team
          });
        })
        this.props.onGetTeams(teams);
      }
    }).catch(err => {
      console.log("error", err);
    });

    const teamConfig = {
      options: teams,
      placeholder: 'Team'
    };

    this.state = {
        inputForm: {
            seasonOption: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Winter', displayValue: 'Winter'},
                        {value: 'Summer', displayValue: 'Summer'}
                    ],
                    placeholder: 'Season'
                },
                value: '',
            },
            teamOption: {
                elementType: 'select',
                elementConfig: teamConfig,
                value: '',
            },
            genderOption: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'M', displayValue: 'M'},
                        {value: 'F', displayValue: 'F'}
                    ],
                    placeholder: 'Gender'
                },
                value: '',
            }
        },
        medalGraphY: 5,
        ageGraphY: 5,
        medalPercentage: '0%'
    }

  }

  componentWillUpdate() {
    this.setMedalGraphY();
    this.setAgeGraphY();
    this.setMedalPercentage();
  }

  setMedalGraphY() {
    let maxGold, maxSilver, maxBronze;
    if (this.props.gold_medals[0]) {
      maxGold = this.getMaxY(this.props.gold_medals);
    }
    if (this.props.silver_medals[0]) {
      maxSilver = this.getMaxY(this.props.silver_medals);
    }
    if (this.props.gold_medals[0]) {
      maxBronze = this.getMaxY(this.props.gold_medals);
    }
    let maxMedals = [maxGold, maxSilver, maxBronze];
    let filteredMaxMedals = maxMedals.filter(value => !Number.isNaN(value));
    let maxY = Math.max.apply(Math, filteredMaxMedals);
    if (maxY) {
      let medalY = maxY * 1.2;
      if (this.state.medalGraphY !== medalY) {
        this.setState({medalGraphY: medalY});
      }
    }
  }

  setAgeGraphY() {
    let maxAge;
    if (this.props.ageCount[0]) {
      maxAge = this.getMaxY(this.props.ageCount);
    }
    if (maxAge) {
      let ageY = maxAge * 1.2;
      if (this.state.ageGraphY !== ageY) {
        this.setState({ageGraphY: ageY});
      }
    }
  }

  getMaxY( arrayData ) {
    return Math.max(...arrayData.map(num => num.y));
  }

  setMedalPercentage() {
    let medalPercentage;
    if (this.props.all_sports_medal !== 0) {
      medalPercentage = Math.round(this.props.top_sport_medal / this.props.all_sports_medal * 100) + '%';
    }
    if (this.state.medalPercentage !== medalPercentage) {
      this.setState({medalPercentage: medalPercentage});
    }
  }

  render () {
    return (
      <div className={styles.OlympicAnalyzer}>
        <div className={styles.row}>
          <InputData inputFormState={this.state} />
          <MedalGraph
              gold_medals={this.props.gold_medals}
              silver_medals={this.props.silver_medals}
              bronze_medals={this.props.bronze_medals}
              medal_graph_y = {this.state.medalGraphY} />
        </div>
        <div className={styles.row}>
          <TopSport
              top_sports={this.props.top_sports}
              medal_percentage={this.state.medalPercentage} />
          <TopAthlete
              top_athletes={this.props.top_athletes}
              top_athlete_medal={this.props.top_athlete_medal} />
          <BestCountry
              best_countries={this.props.best_countries}
              best_country_medal={this.props.best_country_medal} />
          <AgeDistribution
              ageCount={this.props.ageCount}
              age_graph_y = {this.state.ageGraphY} />
        </div>
        <div className={styles.row}>
          <DataFrame
              dataTable={this.props.data} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
    return {
        gold_medals: state.gold_medals,
        silver_medals: state.silver_medals,
        bronze_medals: state.bronze_medals,
        top_sports: state.top_sports,
        top_sport_medal: state.top_sport_medal,
        all_sports_medal: state.all_sports_medal,
        top_athletes: state.top_athletes,
        top_athlete_medal: state.top_athlete_medal,
        best_countries: state.best_countries,
        best_country_medal: state.best_country_medal,
        ageCount: state.ageCount,
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTeams: (teams) => dispatch({type: actionTypes.GET_TEAMS, teams: teams})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OlympicAnalyzer);
