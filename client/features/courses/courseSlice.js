import courseServices from "./courseService"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const  initialState = {
    course: [],
    onecours: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const createCourse = createAsyncThunk(
    "course/create",
    async ({ name, description }) => {
        const res = await courseServices.createCourse({ name, description });
        return res.data;
      }
)

export const uploadCourse = createAsyncThunk(
    "course/video",
    async({video}) =>{
        const res = await courseServices.uploadVideo({video});
        return res.data
    }
)

export const retreiveCourses = createAsyncThunk(
    "course/getCourses",
    async() => {
        const res = await courseServices.getAllCourse();
        return res.data;
    }
)

export const getOneCourse = (id) => createAsyncThunk(
  "course/getoneCourses",
  async() => {
    const res = await courseServices.getOneCourse(id);
    return res.data;
  }
)

export const searchCourse = (data) => createAsyncThunk(
  "course/search",
  async() => {
    const res = await courseServices.searchCourse(data);
    return res.data;
  }
)


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
      isLoading : (state, action) =>{
        state.isLoading = true;
      },
      hasError : (state, action) =>{
        state.isLoading = false;
        state.isError = action.payload;
      },
      getCourse : (state, action) =>{
        state.isLoading = false;
        state.course = action.payload;
      },
      getcourseid: (state, action) =>{
        state.isLoading = false;
        state.onecours = action.payload;
      },
    },
  
    extraReducers: {
      [createCourse.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [retreiveCourses.fulfilled]: (state, action) => {
        console.log("courses",action.payload.data)
        return [...action.payload.data];
      },
      [getOneCourse.fulfilled]: (state, action) => {
        console.log("course",action.payload.data)
        return [...action.payload.data];
      },
    },
  });

  const { reducer, actions } = courseSlice;
  export default reducer;

  export function getCourses (){
    return async (dispatch) =>{
      try {
        dispatch(actions.isLoading());
        const res = await courseServices.getAllCourse();
        dispatch(actions.getCourse(res.data.data));
      } catch (error){
        console.log(error)
        dispatch(actions.hasError(error))
      }
    }
  }

  export function getOneCourses(id){
    return async (dispatch) =>{
      try {
        dispatch(actions.isLoading());
        const res = await courseServices.getOneCourse(id);
        dispatch(actions.getcourseid(res.data));
      } catch (error){
        console.log(error)
        dispatch(actions.hasError(error))
      }
    }
  }

  export function searchCourseAction(search){
    return async (dispatch) =>{
      try {
        dispatch(actions.isLoading());
        const res = await courseServices.searchCourse(search);
        dispatch(actions.getCourse(res.data.data));
      } catch (error) {
        console.log(error)
        dispatch(actions.hasError(error))
      }
    }
  }