import axios from 'axios';


const KEY = 'AIzaSyDiruJtcDjW9wQ3-JjhDfS9SsqXXNho-7s';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        type: 'video' ,
        maxResults: 5 ,
        key: `${KEY}`,
    }
});
