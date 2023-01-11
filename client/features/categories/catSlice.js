import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import catDataService from "./catService";

const initialState = {
  cat: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createCat = createAsyncThunk(
  "cat/create",
  async ({ name, description }) => {
    const res = await catDataService.create({ name, description });
    return res.data;
  }
);

export const retrieveCat = createAsyncThunk(
  "cat/retrieve",
  async () => {
    const res = await catDataService.getAll();
    return res.data;
  }
);


export const updateCat = createAsyncThunk(
  "cat/update",
  async ({ id, data }) => {
    const res = await catDataService.update(id, data);
    return res.data;
  }
);

export const deleteCat = createAsyncThunk(
  "cat/delete",
  async ({ id }) => {
    await catDataService.remove(id);
    return { id };
  }
);

export const deleteAllCat = createAsyncThunk(
  "cat/deleteAll",
  async () => {
    const res = await catDataService.removeAll();
    return res.data;
  }
);

export const findCatByTitle = createAsyncThunk(
  "cat/findByTitle",
  async ({ name }) => {
    const res = await catDataService.findByTitle(name);
    return res.data;
  }
);

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    isLoading : (state, action) =>{
      state.isLoading = true;
    },

    hasError : (state, action) =>{
      state.isLoading = false;
      state.isError = action.payload;
    },

    getCategorie : (state, action) =>{
      state.isLoading = false;
      state.cat = action.payload;
    }
  },

  extraReducers: {
    [createCat.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveCat.fulfilled]: (state, action) => {
      console.log("cat",action.payload.data)
      return [...action.payload.data];
    },
    [updateCat.fulfilled]: (state, action) => {
      const index = state.findIndex(cat => cat.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteCat.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllCat.fulfilled]: (state, action) => {
      return [];
    },
    [findCatByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer, actions } = catSlice;
export default reducer;


export function getAllCategories (){
  return async (dispatch) =>{
    try {
      dispatch(actions.isLoading());
      const res = await catDataService.getAll();
      dispatch(actions.getCategorie(res.data.data));
    } catch (error) {
      console.log(error)
      dispatch(actions.hasError(error))
    }
  }
}