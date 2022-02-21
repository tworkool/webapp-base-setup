import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  failWeatherDataFetch,
  setMessages,
  succeedWeatherDataFetch,
} from "../actions/app_state";
import { WEATHER_DATA_FETCH_REQUESTED } from "../action_types/app_state";
import { getMessages } from "../selectors/appState";
import BACKEND from "./api/backend";

function* fetchWeatherData(action) {
  const oldMessages = yield select(getMessages);
  try {
    const response = yield call(
      BACKEND.sample_fetch,
      action.payload.lat,
      action.payload.lon
    );
    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();

      yield put(succeedWeatherDataFetch({ weatherData: data }));

      const newMessage = {
        level: "success",
        message: "FETCH SUCCESS",
        id: new Date().getTime(),
      };
      yield put(setMessages({ messages: [...oldMessages, newMessage] }));
    } else {
      throw response;
    }
  } catch (e) {
    yield put(failWeatherDataFetch({ weatherData: {} }));

    const newMessage = {
      level: "error",
      message: "Could not fetch weather data",
      id: new Date().getTime(),
    };
    yield put(setMessages({ messages: [...oldMessages, newMessage] }));
  }
}

function* watchFetchWeatherData() {
  yield takeLatest(WEATHER_DATA_FETCH_REQUESTED, fetchWeatherData);
}

export { watchFetchWeatherData };
