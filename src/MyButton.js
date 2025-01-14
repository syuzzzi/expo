import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyButton = () => {
  return (
    <TouchableOpacity 
    onPress={() => alert('MyButton')}
    //hitSlop={{bottom: 100, top: 100, left: 100, right: 100}}
    pressRetentionOffset={{bottom: 100, top: 10, left: 10, right: 10}}
    >
      <View style={{backgroundColor: 'red', padding: 10}}>
        <Text style={{fontSize: 20, color: 'white'}}>MyButton</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;