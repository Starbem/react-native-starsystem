import React from 'react';
import {StatusBar, useColorScheme, ImageBackground} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, Text, ContentBox} from './src';
import bg from './src/helpers/images/stepOne.png';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [index, setIndex] = React.useState(1);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground source={bg} style={{flex: 1}}>
        {/* <Tab value={index} onChange={setIndex}>
          <Tab.Item title="Recentes" titleColor="black" />
          <Tab.Item title="Favoritos" titleColor="black" />
          <Tab.Item title="Carinho" titleColor="black" />
          <Tab.Item title="Carinho" titleColor="black" />
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
        </TabView> */}
        <ContentBox
          topContent={<Text h2>Go to Login</Text>}
          centerContent={
            <Text>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </Text>
          }
          bottomContent={<Button title="Ok, Vamos" variant="secondary" />}
        />
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default App;
