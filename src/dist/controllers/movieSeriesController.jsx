import axios from 'axios'
const URL="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

const popularMovies=async ()=>{
    try{

        const response= await axios.get(URL);
        const moviesdata=response.data.entries.filter((movieData)=>{
            return (movieData.releaseYear >= 2010 &&  movieData.programType === "movie")
        }).sort((mov1,mov2)=> mov1.title > mov2.title ? 1 :-1).slice(0,21) 
        return moviesdata;
    }
    catch(error){
            throw error;
    }
}

const popularSeries=async ()=>{
    try{

        const response= await axios.get(URL);
        const seriesdata=response.data.entries.filter((seriesData)=>{
            return (seriesData.releaseYear >= 2010 &&  seriesData.programType === "series")
        }).sort((sr1,sr2)=> sr1.title > sr2.title ? 1 :-1).slice(0,21) 
        return seriesdata;
    }
    catch(error){
            throw error;
    }
}

export default{
    popularMovies,
    popularSeries
}