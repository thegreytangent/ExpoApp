import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      fadeDuration={1000}
        blurRadius= {3}
        source={{
        width: 200,
        height: 300,
      
        uri: "https://picsum.photos/200/300"
      }}/>
      <Text>Hello react</Text>
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
  },
});
