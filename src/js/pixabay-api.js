const API_KEY = '44034248-a40ccbcbdd6c1fdfd22c52422';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => data.hits);
}
