import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import rootReducer from './src/store/reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
