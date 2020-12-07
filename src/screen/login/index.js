import React from 'react';
import {SafeAreaView,Text,TouchableOpacity} from 'react-native'

const Login=(props)=>{
    return(<SafeAreaView><TouchableOpacity onPress={()=>props.navigation.navigate('Home')}><Text>Login</Text></TouchableOpacity></SafeAreaView>)

}
export default Login;