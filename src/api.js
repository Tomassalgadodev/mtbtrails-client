export const getTrails = async (coords) => {

    const fetchURL = `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${coords.lat}&lon=${coords.lng}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23091ce880msh32853f28162dd0bp17dc3fjsn85b6b58e5faa',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(fetchURL, options);
        const data = await response.json();

        const sortedData = data.data.filter(trail => trail.thumbnail)
            .sort((a, b) => {
                return b.rating - a.rating;
            });
            
        return sortedData;
        // setTrailData(sortedData);
        // setLoadingTrailData(false);
    } catch (err) {
        console.log(err);
    }
}