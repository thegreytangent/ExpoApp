import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,TouchableNativeFeedback, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Text>Leaning react</Text>
       <TouchableNativeFeedback onPress={() => console.log("Image log")}>
       <Image 
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}/>
       </TouchableNativeFeedback>
     
     
    </SafeAreaView>
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
