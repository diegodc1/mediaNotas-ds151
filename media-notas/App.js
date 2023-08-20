import React, {useState} from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcMedia = () => {
    const aux = parseFloat(nota1) + parseFloat(nota2);
    setResultado(aux / 2)
  }

  return (
    <View style={{marginLeft: 20, marginRight: 20, display:'flex', justifyContent: 'center', height: "100vh"}}>
      <Text>Digite a primeira nota:</Text>
      <TextInput
        style={{backgroundColor: '#EEE', padding: 10}}
        placeholder="Digite a primeira nota"
        placeholderTextColor="#999"
        value={nota1}
        onChangeText={t => setNota1(t)}
      />


      <Text style={{marginTop:20}}>Digite a segunda nota:</Text>
      <TextInput
        style={{backgroundColor: '#EEE', padding: 10, marginBottom: 20}}
        placeholder="Digite a segunda nota"
        placeholderTextColor="#999"
        value={nota2}
        onChangeText={t => setNota2(t)}
      />

      <Button 
        title="Calcular Média"
        onPress={calcMedia}
      />

      {resultado != 0 && 
        <View style={{display:'flex', alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 20}}>Resultado: {resultado}</Text>
        </View>
      } 
    </View>
  );
}

