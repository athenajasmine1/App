import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        {/* <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        /> */}
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

{/*Top-left buttom*/}
<TouchableOpacity
style={styles.menuButtom}
onPress={() => {
  console.log('Menu button pressed!');
}}
>
  <Text style={styles.menuText}>≡</Text>
</TouchableOpacity>





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menubuttom: {
    position: 'absolute',
    top: 20, 
    left: 20,
    padding: 10,
    backgroundColor: '#FFA500', 
    borderRadius: 5,
    zIndex: 1, 
  menuText: {
    fontSize: 18,
    color: '#FFF', 
    fontWeight: 'bold',
  },
});

