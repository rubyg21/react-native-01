import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
         placeholder="add a new task"
         autoComplete="off"
         autoCorrect={false}
         autoCapitalize= 'none'
         
         />
        <Button title="ADD" color="#626893" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    width: '75%',
    borderBottomColor: "#626893",
    borderBottomWidth: 1,
    height: 40,
    color:'#212121'
  },
});
