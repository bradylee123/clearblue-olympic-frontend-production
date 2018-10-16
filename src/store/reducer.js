import * as actionTypes from './actions';

const initialState = {
  teams: [],
  top_sports: [],
  top_sport_medal: '',
  all_sports_medal: '',
  top_athletes: [],
  top_athlete_medal: '',
  best_countries: [],
  best_country_medal: '',
  ageCount: [],
  gold_medals: [],
  silver_medals: [],
  bronze_medals: [],
  data: []
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
      case actionTypes.GET_TEAMS:
          return {
              ...state,
              teams: action.teams
          }
      case actionTypes.UPDATE_GOLD_MEDALS:
          return {
              ...state,
              gold_medals: action.gold_medal_data
          }
      case actionTypes.UPDATE_SILVER_MEDALS:
          return {
              ...state,
              silver_medals: action.silver_medal_data
          }
      case actionTypes.UPDATE_BRONZE_MEDALS:
          return {
              ...state,
              bronze_medals: action.bronze_medal_data
          }
      case actionTypes.UPDATE_TOP_SPORT_DATA:
          const top_sport_data = {
            top_sports: action.top_sports,
            top_sport_medal: action.top_sport_medal
          }
          return {
              ...state,
              top_sports: top_sport_data.top_sports,
              top_sport_medal: top_sport_data.top_sport_medal
          }
      case actionTypes.UPDATE_ALL_SPORTS_MEDAL:
          return {
              ...state,
              all_sports_medal: action.all_sports_medal
          }
      case actionTypes.UPDATE_TOP_ATHLETE_DATA:
          const top_athlete_data = {
            top_athletes: action.top_athletes,
            top_athlete_medal: action.top_athlete_medal
          }
          return {
              ...state,
              top_athletes: top_athlete_data.top_athletes,
              top_athlete_medal: top_athlete_data.top_athlete_medal
          }
      case actionTypes.UPDATE_BEST_COUNTRY_DATA:
          const best_country_data = {
            best_countries: action.best_countries,
            best_country_medal: action.best_country_medal
          }
          return {
              ...state,
              best_countries: best_country_data.best_countries,
              best_country_medal: best_country_data.best_country_medal
          }
      case actionTypes.UPDATE_AGE_DATA:
          return {
              ...state,
              ageCount: action.ageCount
          }
      case actionTypes.UPDATE_DATA:
          return {
              ...state,
              data: action.data
          }
      default:
        return state;
  }
}


export default reducer;
