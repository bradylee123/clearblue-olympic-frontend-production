import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actions';
import styles from './InputData.css';

import { updateObject } from '../../shared/utility';

class InputData extends Component {

    constructor(props) {
      super(props);
      this.state = this.props.inputFormState;
    }

    formChangeHandler = () => {
      const formData = {};
      for (let formElementIdentifier in this.state.inputForm) {
          formData[formElementIdentifier] = this.state.inputForm[formElementIdentifier].value;
      }
      this.updateGoldMedalData(formData);
      this.updateSilverMedalData(formData);
      this.updateBronzeMedalData(formData);
      this.updateTopSportData(formData);
      this.updateAllSportsMedalData(formData);
      this.updateTopAthleteData(formData);
      this.updateBestCountryData(formData);
      this.updateAgeData(formData);
      this.updateData(formData);
    }

    updateGoldMedalData(formData) {
      axios.get('/goldMedal', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const gold_medal_data = [];
          res.data.map((record) => {
            gold_medal_data.push({
              x: record.year,
              y: record.num
            });
          })
          this.props.onUpdateGoldMedals(gold_medal_data);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateSilverMedalData(formData) {
      axios.get('/silverMedal', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const silver_medal_data = [];
          res.data.map((record) => {
            silver_medal_data.push({
              x: record.year,
              y: record.num
            });
          })
          this.props.onUpdateSilverMedals(silver_medal_data);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateBronzeMedalData(formData) {
      axios.get('/bronzeMedal', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const bronze_medal_data = [];
          res.data.map((record) => {
            bronze_medal_data.push({
              x: record.year,
              y: record.num
            });
          })
          this.props.onUpdateBronzeMedals(bronze_medal_data);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateTopSportData(formData) {
      axios.get('/topSport', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const top_sports = [];
          res.data.map((top_sport) => {
            top_sports.push(top_sport.sport);
          })
          const top_sport_medal = res.data[0].num;
          this.props.onUpdateTopSportData(top_sports, top_sport_medal);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateAllSportsMedalData(formData) {
      axios.get('/allSportsMedal', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const all_sports_medal = res.data[0].num;
          this.props.onUpdateAllSportsMedal(all_sports_medal);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateTopAthleteData(formData) {
      axios.get('/topAthlete', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const top_athletes = [];
          res.data.map((top_athlete) => {
            top_athletes.push(top_athlete.name);
          })
          const top_athlete_medal = res.data[0].num;
          this.props.onUpdateTopAthleteData(top_athletes, top_athlete_medal);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateBestCountryData(formData) {
      axios.get('/bestCountry', {
        params: {
          season: formData.seasonOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const best_countries = [];
          res.data.map((best_country) => {
            best_countries.push(best_country.country);
          })
          const best_country_medal = res.data[0].num;
          this.props.onUpdateBestCountryData(best_countries, best_country_medal);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateAgeData(formData) {
      axios.get('/ageDistribution', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const ageCount = [];
          res.data.map((record) => {
            ageCount.push({
              x: record.age,
              y: record.num
            });
          })
          this.props.onUpdateAgeData(ageCount);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    updateData(formData) {
      axios.get('/data', {
        params: {
          season: formData.seasonOption,
          team: formData.teamOption,
          sex: formData.genderOption
        }
      })
      .then(res => {
        if (Array.isArray(res.data) && res.data.length) {
          const dataTable = [];
          res.data.map((record) => {
            dataTable.push([
              record.id,
              record.name,
              record.sex,
              record.age,
              record.height,
              record.weight,
              record.team,
              record.noc,
              record.games,
              record.year,
              record.season,
              record.city,
              record.sport,
              record.event,
              record.medal
            ]);
          })
          this.props.onUpdateData(dataTable);
        }
      }).catch(err => {
        console.log("error", err);
      });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.inputForm[inputIdentifier], {
            value: event.target.value,
        });
        const updatedInputForm = updateObject(this.state.inputForm, {
            [inputIdentifier]: updatedFormElement
        });
        this.setState({inputForm: updatedInputForm}, function() {
          this.formChangeHandler();
        });
    }

    render () {
      const formElementsArray = [];
      for (let key in this.state.inputForm) {
          formElementsArray.push({
              id: key,
              config: this.state.inputForm[key]
          });
      }
      let form = (
          <form>
              {formElementsArray.map(formElement => (
                  <select
                      key={formElement.id}
                      value={formElement.config.value}
                      placeholder={formElement.config.elementConfig.placeholder}
                      className={styles.dropdown}
                      onChange={(event) => this.inputChangedHandler(event, formElement.id)}>
                          <option selected="selected" value="">
                              {formElement.config.elementConfig.placeholder}
                          </option>
                      {formElement.config.elementConfig.options.map(option => (
                          <option key={option.value} value={option.value}>
                              {option.value}
                          </option>
                      ))}
                  </select>
              ))}
          </form>
      );
      return (
          <div className={styles.InputData}>
              {form}
          </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateGoldMedals: (gold_medal_data) => dispatch({type: actionTypes.UPDATE_GOLD_MEDALS, gold_medal_data: gold_medal_data}),
        onUpdateSilverMedals: (silver_medal_data) => dispatch({type: actionTypes.UPDATE_SILVER_MEDALS, silver_medal_data: silver_medal_data}),
        onUpdateBronzeMedals: (bronze_medal_data) => dispatch({type: actionTypes.UPDATE_BRONZE_MEDALS, bronze_medal_data: bronze_medal_data}),
        onUpdateTopSportData: (top_sports, top_sport_medal) => dispatch({type: actionTypes.UPDATE_TOP_SPORT_DATA, top_sports: top_sports, top_sport_medal: top_sport_medal}),
        onUpdateAllSportsMedal: (all_sports_medal) => dispatch({type: actionTypes.UPDATE_ALL_SPORTS_MEDAL, all_sports_medal: all_sports_medal}),
        onUpdateTopAthleteData: (top_athletes, top_athlete_medal) => dispatch({type: actionTypes.UPDATE_TOP_ATHLETE_DATA, top_athletes: top_athletes, top_athlete_medal: top_athlete_medal}),
        onUpdateBestCountryData: (best_countries, best_country_medal) => dispatch({type: actionTypes.UPDATE_BEST_COUNTRY_DATA, best_countries: best_countries, best_country_medal: best_country_medal}),
        onUpdateAgeData: (ageCount) => dispatch({type: actionTypes.UPDATE_AGE_DATA, ageCount: ageCount}),
        onUpdateData: (dataTable) => dispatch({type: actionTypes.UPDATE_DATA, data: dataTable})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
