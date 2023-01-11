import chapterService from "./chapterService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    chapter: [],
    onechapter: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createChapter = createAsyncThunk(
    "chapter/create",
    async ({ title, lessons, free_preview, cours }) => {
        const res = await chapterService.addChapter({ title, lessons, free_preview, cours });
        return res.data;
      }
)

export const retreiveChapter = createAsyncThunk(
    "chapter/getChapter",
    async() => {
        const res = await chapterService.getAllChapter();
        return res.data;
    }
)

export const getOneChapter = (id) => createAsyncThunk(
  "course/getoneChapter",
  async() => {
    const res = await chapterService.getOneChapter(id);
    return res.data;
  }
)

const chapterSlice = createSlice({
    name: "chapter",
    initialState,
    reducers: {
      isLoading : (state, action) =>{
        state.isLoading = true;
      },
      hasError : (state, action) =>{
        state.isLoading = false;
        state.isError = action.payload;
      },
      getChapterid: (state, action) =>{
        state.isLoading = false;
        state.chapter = action.payload;
      },
    },
  
    extraReducers: {
      [createChapter.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [retreiveChapter.fulfilled]: (state, action) => {
        console.log("chapters",action.payload.data)
        return [...action.payload.data];
      },
      [getOneChapter.fulfilled]: (state, action) => {
        console.log("chapter",action.payload.data)
        return [...action.payload.data];
      },
    },
  });

  const { reducer, actions } = chapterSlice;
  export default reducer;

  export function getChapter(id){
    return async (dispatch) =>{
      try {
        dispatch(actions.isLoading());
        const res = await chapterService.getChapters(id);
        dispatch(actions.getChapterid(res.data.data));
      } catch (error){
        console.log(error)
        dispatch(actions.hasError(error))
      }
    }
  }



  