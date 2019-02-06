import axiosPro from 'axios-jsonp-pro';
import { nycAppId, nycAppKey } from '../secrets';

// a call to gapi.representativeInfoByAddress returns a response with a field called 
// "Normalized Input" = {line1: "",  city: "", state: "", zip: "")
const parseNormalizedInput = normalizedInput => {
  const city = normalizedInput["city"], 
        zip = normalizedInput["zip"],
        isNumber = /^\d+$/;

  let streetNo = '',
      streetName = '',
      char,
      endOfStreetNo = 0;
  for (let i = 0; i < normalizedInput["line1"].length; i++){
    char = normalizedInput["line1"][i];
    // console.log('this is char: ', char, isNumber.test(char));
    if (!endOfStreetNo) {
      if (isNumber.test(char)) streetNo += char;
      else {
        endOfStreetNo = i;
        break;
      }
    } 
  }
  streetName = normalizedInput["line1"].slice(endOfStreetNo + 1);
  return { streetNo: streetNo, streetName: streetName, city: city, zip: zip }

}

const getCityCouncilDistrict = async normalizedInput => {
  const { streetNo, streetName, zip } = parseNormalizedInput(normalizedInput);
  const apiUrl = `https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=${streetNo}&street=${streetName}&zip=${zip}&app_id=${nycAppId}&app_key=${nycAppKey}`; 
  try {
    const data = await axiosPro.jsonp(apiUrl);
    return data.address.cityCouncilDistrict;
  } catch(err) {
    console.error('error fetching city council district number', err);
  }
}
const isNYC = county => {
  const nycCounties = ['Bronx County', 'Kings County', 'New York County', 'Richmond County', 'Queens County'];
  return nycCounties.includes(county);
}

// this is used solely to find nyc council rep, any addresses outside of nyc will not return local reps
export const getOCDID = async (divisions, normalizedInput) => {
  const cityCouncilDistrict = await getCityCouncilDistrict(normalizedInput),
        OCDIDs = Object.keys(divisions),
        divisionWithCounty =  OCDIDs[3],
        divisionWithoutCounty = OCDIDs[4];
  const county = divisions[divisionWithCounty]["name"];
  if (isNYC(county) && cityCouncilDistrict) return`${divisionWithoutCounty}/council_district:${cityCouncilDistrict}`;
  else return 'notNYC';
}

