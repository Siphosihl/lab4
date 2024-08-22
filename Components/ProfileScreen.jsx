import React, { useContext } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { Context } from './Context'; 



export default function ProfileScreen() {

  const { formData } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);


  const updateTextColor = (color) => setTheme((prev) => ({ ...prev, textColor: color }));
  const updateBackgroundColor = (color) => setTheme((prev) => ({ ...prev, backgroundColor: color }));

  return (

    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      // Profile header
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.textColor, textAlign: 'center', marginVertical: 20 }}>
        Profile
      </Text>

      {/* Section 1: Personal Information */}
      <View style={{ backgroundColor: '#fff', padding: 20, margin: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Personal Information
        </Text>
        <Text style={{ color: theme.textColor }}>
          Name: {formData.name}
        </Text>
        <Text style={{ color: theme.textColor }}>
          Email: {formData.email}
        </Text>
        <Text style={{ color: theme.textColor }}>
          Phone: {formData.phone}
        </Text>
      </View>

      {/* Section 2: Address */}
      <View style={{ backgroundColor: '#fff', padding: 20, margin: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Address
        </Text>
        <Text style={{ color: theme.textColor }}>
          Street: {formData.address.street}
        </Text>
        <Text style={{ color: theme.textColor }}>
          City: {formData.address.city}
        </Text>
        <Text style={{ color: theme.textColor }}>
          State: {formData.address.state}
        </Text>
        <Text style={{ color: theme.textColor }}>
          ZIP: {formData.address.zip}
        </Text>
      </View>

      {/* Section 3: Preferences */}
      <View style={{ backgroundColor: '#fff', padding: 20, margin: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Preferences
        </Text>
        <Text style={{ color: theme.textColor }}>
          Preferred Language: {formData.preferences.language}
        </Text>
        <Text style={{ color: theme.textColor }}>
          Notifications: {formData.preferences.notifications ? 'Enabled' : 'Disabled'}
        </Text>
      </View>

      {/* Theme Customization Section */}
      <View style={{ padding: 20, margin: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.textColor }}>
          Customize Theme
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
            color: theme.textColor,
            backgroundColor: '#fff',
          }}
          placeholder="Enter Text Color (e.g., #000000)"
          placeholderTextColor="#999"
          onSubmitEditing={(e) => updateTextColor(e.nativeEvent.text)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
            color: theme.textColor,
            backgroundColor: '#fff',
          }}
          placeholder="Enter Background Color (e.g., #ffffff)"
          placeholderTextColor="#999"
          onSubmitEditing={(e) => updateBackgroundColor(e.nativeEvent.text)}
        />
        <Button title="Apply Theme" onPress={() => Alert.alert('Theme Updated!')} />
      </View>
    </ScrollView>
  );
}

