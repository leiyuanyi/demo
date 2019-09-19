import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, FlatList } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const data = new Array(150).fill(0);

class HomeScreen extends React.Component {
  renderItem = ({ index }) => {
    return (
      <View style={{ height: 50 }}>
        <Text style={{ textAlign: 'center' }}>Item {index}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
          keyExtractor={(value, index) => index + ''}
        />
      </View>
    );
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const TabNavigator = createBottomTabNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: { screen: HomeScreen }
});

export default createAppContainer(TabNavigator);
