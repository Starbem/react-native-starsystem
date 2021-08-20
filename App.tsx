import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, Tab, TabView, Text} from './src';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [index, setIndex] = React.useState(1);

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
      <View style={{flex: 1}}>
        <Tab value={index} onChange={setIndex}>
          <Tab.Item title="Recentes" titleColor="black" />
          <Tab.Item title="Favoritos" titleColor="black" />
          <Tab.Item title="Carinho" titleColor="black" />
          <Tab.Item title="Compras" titleColor="black" />
        </Tab>

        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{width: '100%'}}>
            <Text h1>Recentes</Text>
          </TabView.Item>
          <TabView.Item style={{width: '100%'}}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{width: '100%'}}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
