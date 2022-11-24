import axios from 'axios'

export const baseUrl = 'http://localhost:8080';
const tracksUrl = `${baseUrl}/tracks`; 
const findTracksUrl = `${baseUrl}/tracks/search?query=`;

export async function getTracksRequest() {
  try {
    const res = await axios.get(tracksUrl);
    return res;
  } catch(error) {
    console.log(error);
  }
}

export async function findTracksRequest(query) {
  try {
    const res = await axios.get(`${findTracksUrl}${query}`);
    return res;
  } catch(error) {
    console.log(error);
  }
}