import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "",
  error: null,
};

export const fetchPosts = createAsyncThunk("fetch/posts", async (page, thunkApi) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    return res.json();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortPosts: (state, action) => {
      state.posts.sort((a, b) => {
        if (action.payload.startsWith('-id') || action.payload.startsWith('id')) {
          if (action.payload.startsWith('-')) {
            return b[action.payload.slice(1)] - a[action.payload.slice(1)];
          }
          return a[action.payload] - b[action.payload];
        }
        if (action.payload === 'title') {
          return a[action.payload].localeCompare(b[action.payload]);
        }
        if (action.payload === 'body') {
          return a[action.payload].localeCompare(b[action.payload]);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { sortPosts } = postsSlice.actions;

export default postsSlice.reducer;