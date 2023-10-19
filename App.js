import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth  } from './firelink';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');

  function userLogin (){
    signInWithEmailAndPassword(auth, userMail, userPass)
    .then((userCredential) =>{
      const user = userCredential.user;
      alert('Login Efetuado')
      console.log(user); 
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>DXC-TECHNOLOGY</Text>
      <TextInput style={styles.formInput}
      placeholder='Informe o seu RE'
      keyboardType='email-address'
      autoComplete="username"
      value={ userMail }
      onChangeText={setUserMail}

        />
      <TextInput style={styles.formInput}
      placeholder='Informe a sua senha'
      secureTextEntry
      value={userPass}
      onChangeText={setUserPass}
      />
      <Pressable style={styles.formButton} 
      onPress={userLogin}
      >
        <Text style={styles.textButton}>Continuar  ➤</Text>
      </Pressable>
      <View style={styles.subContainer}>
        {/* <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable> */}
        <Pressable style={styles.subButton}>
        <Text style={styles.subTextButton}>Powered by Raul Henrique</Text>
        </Pressable>
      </View>
    </View>
  );
}
//Style
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
