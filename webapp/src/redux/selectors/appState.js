const getMessages = (state) => {
  return state.appState.messages;
};

const getWeatherData = (state) => {
  return state.appState.weatherData;
};

export { getMessages, getWeatherData };
