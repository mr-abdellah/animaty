/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadAnime = createAsyncThunk('missions/loaded', async () => fetch('https://api.jikan.moe/v4/top/anime').then((res) => res.json()));

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    pending: false,
    failed: false,
    animes: [],
  },
  reducers: {},
  extraReducers: {
    [loadAnime.pending]: (state) => {
      state.pending = true;
    },
    [loadAnime.fulfilled]: (state, action) => {
      state.pending = false;
      state.animes = action.payload.data.map((anime) => ({
        id: anime.mal_id,
        title: anime.title,
        description: anime.synopsis,
        img: anime.images.jpg.image_url,
        type: anime.type,
        episodes: anime.episodes,
        rating: anime.rating,
        year: anime.year,
      }));
    },
    [loadAnime.rejected]: (state) => {
      state.failed = true;
    },
  },
});

export default animeSlice.reducer;
