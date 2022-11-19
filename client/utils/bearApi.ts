import axios from 'axios'

export const baseUrl: string = 'http://localhost:8080';
const tracksUrl:string = `${baseUrl}/tracks`; 
const findTracksUrl:string = `${baseUrl}/tracks/search?query=`;

export function getTracksRequest() {
  return axios.get(tracksUrl)
  .then((res) => {
    console.log(res);
    return res;
  });
}

export function findTracksRequest(query) {
  return axios.get(`${findTracksUrl}${query}`)
  .then((res) => {
    console.log(res);
    return res;
  });
}