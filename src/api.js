import axios from "axios";

const searchImages = async(term) => {
    const url = 'htptps://api.unsplash.com/search/photos/?client_id=agetJ2Khb6eQ4KPQ6x0hNaENZk1N2bb8W-v1ZqK7XPs'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages