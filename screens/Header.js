import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import {View, Text} from 'react-native';

//functional component
export default Header =()=> {

    return (
      <Appbar.Header
        theme={{
            color:{
                primary:"#00aaff"
            }
            
        }}
      >
          <Title>
              Weather App
          </Title>
       
      </Appbar.Header>
    );
  
}