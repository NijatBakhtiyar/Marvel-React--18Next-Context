import axios from "axios";

async function Axios(movie) {

  const hash = "6eb2ad38ecae5cc222a79c4f2355db38";
  const publicKey = "1df3a884657cda247bd3a130c88a08a3";
  const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&nameStartsWith=${movie}`;

  try {
    let { data } = await axios.get(url);
    return data.data.results;
  }
  catch (err) {
    console.log(err);
  }

}


export default Axios;
