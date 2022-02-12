import React from 'react';
import { View } from 'react-native';
import GameInfo from './src/components/GameInfo';
import Header from './src/components/Header';

const App: React.FC = () => {
  return (
    <View>
      <Header />
      <GameInfo />
    </View>
  );
};

export default App;