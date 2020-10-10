const CURRENT_YEAR = (new Date()).getFullYear()
const NEWS_URL = 'http://newsapi.org/v2/top-headlines?';
const NEWS_KEY = 'db898a9e78a949d68a2aeb1466c43a70';
//const YOUTUBE_KEY = 'AIzaSyC15q41RjZkuP2Y-DdSGMdGclnYJFoYUFc';
//const YOUTUBE_KEY = 'AIzaSyCLKw2q_v2osB5uBw6q_eq_ab_EdqZiz7c';
const YOUTUBE_KEY = 'AIzaSyAiigZJ0wJC0JKnAzgLiSlBKC_Kye9rzUw';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

const query='Covid+News';
const order='relevance';
const duration='short';
const videoType='video';
const definition='high';

const country='ca';
const city='';
const category='health';

export { 
    CURRENT_YEAR,
    NEWS_URL,
    NEWS_KEY,
    YOUTUBE_URL,
    YOUTUBE_KEY,

    query,
    order,
    duration,
    videoType,
    definition,

    country,
    city,
    category
}