import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getSongsFailed,
  getSongsSuccess,
  createSongSuccess,
  createSongFailed,
  updateSongSuccess,
  updateSongFailed,
  deleteSongSuccess,
  deleteSongFailed,
  getSongs,
  createSong,
  updateSong,
  deleteSong,
} from "../state/musicSlice";

// function* workGetSongs() {
//   try {
//     const songs = yield call(axios.get, "http://127.0.0.1:5000/api/songs");
//     yield put(getSongsSuccess(songs.data.songs));
//   } catch (error) {
//     yield put(getSongsFailed());
//   }
// }

function* getSongsSaga() {
  try {
    const response = yield call(axios.get, "http://127.0.0.1:5000/api/songs");
    yield put(getSongsSuccess(response.data.songs));
  } catch (error) {
    yield put(getSongsFailed(error));
  }
}

function* createSongSaga(action) {
  try {
    const response = yield call(
      axios.post,
      "http://127.0.0.1:5000/api/songs",
      action.payload
    );
    yield put(createSongSuccess(response.data));
  } catch (error) {
    yield put(createSongFailed(error));
  }
}

function* updateSongSaga(action) {
  try {
    const response = yield call(
      axios.put,
      `http://127.0.0.1:5000/api/songs/${action.payload._id}`,
      action.payload.formData 
    );
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailed(error));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(axios.delete, `http://127.0.0.1:5000/api/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailed(error));
  }
}

// function* songSaga() {
//   yield takeEvery("music/getSongs", workGetSongs);
// }

function* songSaga() {
  yield takeLatest(getSongs.type, getSongsSaga);
  yield takeLatest(createSong.type, createSongSaga);
  yield takeLatest(updateSong.type, updateSongSaga);
  yield takeLatest(deleteSong.type, deleteSongSaga);
}

export default songSaga;
