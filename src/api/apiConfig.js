const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cd8c616ed6b25eb05fd6fd488ec8ee4e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig