import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './contexts';


export default function FormScreen1({ navigation }) {
  
  const { formData, setFormData } = useContext(FormContext);

  
  const handleNext = () => {
    // Navigate to the next screen (FormScreen2)
    navigation.navigate('FormScreen2');
  };


  return (
    <View style={styles.container}>
      <Text>Step 1: Enter your name</Text>
      <TextInput
        // Set the value of the TextInput to the current name in formData
        value={formData.name}
        // Update the formData.name when the user types something
        onChangeText={(name) => setFormData({ ...formData, name })}
        style={styles.input}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

