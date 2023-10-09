import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>DXC-TECHNOLOGY</Text>
      <TextInput style={styles.formInput}
      placeholder='Informe o seu RE'
      autoComplete="username"
      />
      <TextInput style={styles.formInput}
      placeholder='Informe a sua Unidade'
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
        <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle:{
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blueviolet',
    margin: 10,
  },
  formInput:{
    borderColor: 'blueviolet',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: 'blueviolet',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10, 
    alignItems: 'center',
  },
  textButton:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '80',  
  },
  subButton:{
    padding: 10,
  },
  subTextButton:{
    color: 'blueviolet'
  },
});
