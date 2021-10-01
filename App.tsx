import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Input, colors} from './src';
// @ts-ignore
// import bg from './src/helpers/images/stepOne.png';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [index, setIndex] = React.useState(1);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{paddingHorizontal: 16, paddingTop: 100}}>
        <Input placeholder="Email" placeholderTextColor={colors.grey1} />
        <Input
          placeholder="Password"
          containerStyle={{marginTop: 20}}
          placeholderTextColor={colors.grey1}
        />

        {/* <Button title="Solid Button" style={{marginBottom: 10}} />

        <Button
          title="Outline button"
          type="outline"
          variant="secondary"
          style={{marginBottom: 10}}
        />

        <Button title="Clear button" type="clear" style={{marginBottom: 10}} />

        <Button
          title="Loading button"
          variant="secondary"
          loading
          style={{marginBottom: 10}}
        /> */}
      </View>
      {/* <ImageBackground source={bg} style={{flex: 1}}> */}
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
      {/* <ContentBox
          topContent={<Text h2>Go to Login</Text>}
          centerContent={
            <Text>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </Text>
          }
          bottomContent={<Button title="Ok, Vamos" variant="secondary" />}
        /> */}
      {/* </ImageBackground> */}
    </SafeAreaProvider>
  );
};

export default App;
