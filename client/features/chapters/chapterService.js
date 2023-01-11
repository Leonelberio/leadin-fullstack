import axios from 'axios'

// const baseUrl = 'https://eyichem.herokuapp.com/api/'
// const baseUrl = "https://leadinbackend.onrender.com/api/";
// const baseUrl = "http://localhost:8080/api/";
const baseUrl = `${process.env.baseUrl}/api/`;



const getAllChapter = () => {
    return axios.get(`${baseUrl}chapter`)
}

const getChapters = courId => {
    return axios.post(`${baseUrl}chapter/bycours`, {courId})
}

const addChapter = data =>{
    return axios.post(`${baseUrl}chapter/create/lesson`, data)
}

const chapterService ={
    getAllChapter,
    getChapters,
    addChapter,
}

export default chapterService