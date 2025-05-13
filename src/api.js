import axios from "axios";

const searchImages = async(term) => {
    const url = 'htptps://api.unsplash.com/search/photos/?client_id=To7bFovLPhT7oRq_7SUFrvOjUWq0URJG-lXGozF2K3Y'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages