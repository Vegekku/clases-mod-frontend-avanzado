const API_KEY = 'Your-api-key';
const api = (API_URL = 'http://api.tvmaze.com/') => {
    const SEARCH_API_URL = `${API_URL}search/shows?q=`;
    const SHOWS_URL = `${API_URL}shows`;

    return {
        createQuote: async (id, text) => {
            try {
                const response = await fetch(`${API_URL}/quote/${id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        quote: text,
                    }),
                    headers: {
                        'X-API-KEY': API_KEY,
                    },
                });
                const quote = await response.json();
                return quote;
            } catch (e) {
                throw e;
            }
        },
        getShows: async (query) => {
            try {
                const requestUrl = query ? 
                    `${SEARCH_API_URL}${query}` :
                    SHOWS_URL;
                const response = await fetch(requestUrl);
                const data = await response.json();
                const mapData = data.map((item) => {
                    if (item.show) {
                        return item.show;
                    }
                    return item;
                });
                // Por ejemplo, que data no devuelva el numero de elementos esperados
                // Lanzamos un throw que será recogido en catch
                // if (true) {
                //     throw 'Error1';
                // }
                return mapData;
            } catch (error) {
                throw error;
            } 
        },
        getShowDetail: async (id) => {
            try {
                const response = await fetch(`${SHOWS_URL}/${id}`);
                const show = await response.json();
                return show;
            } catch (e) {
                throw e;
            }
            
        }
    };
};

export default api;