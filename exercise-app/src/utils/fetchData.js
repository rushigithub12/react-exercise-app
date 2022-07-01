export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '3076cce53cmshe4adf13160887d5p13e4dbjsn141fc948fe2b',
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3076cce53cmshe4adf13160887d5p13e4dbjsn141fc948fe2b',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}