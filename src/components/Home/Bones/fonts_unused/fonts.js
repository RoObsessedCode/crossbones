import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FontsHome from '../views/fonts_home';
import FontsDetails from '../views/fonts_detail';

const FontsTabView = ({ navigation }) => (
  <FontsHome banner="Fonts" navigation={navigation} />
);

const FontsDetailTabView = ({ navigation }) => (
  <FontsDetails banner="Fonts Detail" navigation={navigation} />
);

const FontsTab = StackNavigator({
  Home: {
    screen: FontsTabView,
    path: '/',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#548ff7'},
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      title: 'Fonts',
    }),
  },
  Detail: {
    screen: FontsDetailTabView,
    path: 'fonts_detail',
    navigationOptions: {
      title: 'Fonts Detail',
    },
  },
});

export default FontsTab;
