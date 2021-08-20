import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from './src';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{padding: 0}}>
        <Header
          placement="left"
          backgroundColor="secondary"
          centerComponent={{
            text: 'Agendar Consulta',
            style: {color: '#fff', fontSize: 16},
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
