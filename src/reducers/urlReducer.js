const urlReducer = (state = 'http://newsapi.org/v2/top-headlines?category=general&apiKey=3377d076bfef4723bb8c61632da7bc3a', action) => {
    switch (action.type) {
        case 'TRENDS':
            return 'http://newsapi.org/v2/top-headlines?category=general&apiKey=3377d076bfef4723bb8c61632da7bc3a';
        case 'QUERY':
            return 'http://newsapi.org/v2/everything?q=' + action.query + '&' +
                'apiKey=3377d076bfef4723bb8c61632da7bc3a';
        default:
            return state;
    }
}

export default urlReducer