import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyCN9NMIj1P7p3Kapta0HphCk0YPeJsXMhk',
    cx: 'f2876dd65df5647c3'
}
export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
