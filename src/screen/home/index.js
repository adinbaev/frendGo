import React from 'react';
import {SafeAreaView,Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../dashboard'


const Drawer = createDrawerNavigator();

const Home=()=>{
    return(<NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />

         
        </Drawer.Navigator>
      </NavigationContainer>)

}
export default Home;