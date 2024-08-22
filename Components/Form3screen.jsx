import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { FormContext } from './contexts';

export default function FormScreen3({ navigation }) {
  
  const { formData } = useContext(FormContext);

  
  const handleFinish = () => {
    // Navigate to the Profile screen
    navigation.navigate('Profile');
  };

  
  return (
    <View style={styles.container}>
      <Text>Step 3: Review your information</Text>
      <Text>Name: {formData.name}</Text>
      <Text>Address: {formData.address}</Text>
      <Button title="Finish" onPress={handleFinish} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});


