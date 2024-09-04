import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [displayAge, setDisplayAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      Alert.alert('Invalid input', 'Please enter a valid age.');
      return;
    }
    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;
    setDisplayAge(ageNumber);
    setLimits(`${lower.toFixed(0)} - ${upper.toFixed(0)}`);
  };

  return (
    <View style={styles.container}>
      {displayAge !== '' && (
        <View style={styles.results}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.resultText}>{displayAge}</Text>
          
          <Text style={styles.label}>Limits</Text>
          <Text style={styles.resultText}>{limits}</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Button title="CALCULATE" onPress={calculateHeartRateLimits} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  results: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 10,
  },
});
