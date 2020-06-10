import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import {View, Text} from 'react-native';

//functional component
export default Header =(props)=> {

    return (
      <Appbar.Header
        theme={{
            color:{
                primary:"#00aaff"
            }
            
        }}
        //add style to the header bar
        style={{flexDirection:"row", justifyContent:"center"}}
      >
          <Title style={{color:"white"}}>
            {props.name}
          </Title>
       
      </Appbar.Header>
    );
  
}