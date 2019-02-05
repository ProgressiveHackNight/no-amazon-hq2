// import jsonp from 'jsonp';
// import { nycAppId, nycAppKey } from '../secrets';

// a call to gapi.representativeInfoByAddress returns a response with a field called 
// "Normalized Input" = {line1: "",  city: "", state: "", zip: "")
const parseNormalizedInput = normalizedInput => {
  
  let streetNo = '';
  let streetName = '';
  let city = normalizedInput["city"];
  let zip = normalizedInput["zip"];
  const isNumber = /^\d+$/;
  // TODO: parse street number and name from normalizedInput["line1"]
  return { streetNo: streetNo, streetName: streetName, city: city, zip: zip }

 
}

console.log(parseNormalizedInput({ "line1": "99 w 9th st"}))

// export const getCityCouncilDistrict = (streetNo, streetName, zip) => {
//   jsonp(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=${streetNo}&street=${streetName}&zip=${zip}&app_id=${nycAppId}&app_key=${nycAppKey}`, null, function (err, data) {
//       if (err) {
//         console.error(err.message);
//       } else {
//         console.log(data);
//       }
//     });
// }
const isNYC = county => {
  const nycCounties = ['Bronx County', 'Kings County', 'New York County', 'Richmond County', 'Queens County'];
  return nycCounties.includes(county);
}

// this is used solely to find nyc council rep, any addresses outside of nyc will not return local reps
const getOCDID = (divisions, cityCouncilDistrict) => {
  const divisionStrings = Object.keys(divisions);
  const divisionWithoutPlaceOrDistrict =  divisionStrings[4];
  const county = divisions[divisionWithoutPlaceOrDistrict]["name"];
  if (isNYC(county))return `${divisionWithoutPlaceOrDistrict}/place:new_york/council_district:${cityCouncilDistrict}`
  else return '';
}