import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './src/Navigations/StackNavigation';

const App = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <StackNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
