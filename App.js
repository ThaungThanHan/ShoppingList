import React, {useState} from 'react';
import {View,Text,StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id:uuidv4(), text:'Milk'},
    {id:uuidv4(), text:'Eggs'},
    {id:uuidv4(), text:'Bread'},
    {id:uuidv4(), text:'Juice'},
  ]);

  const addItem = text => {
    if(!text){
      Alert.alert('Error','Please enter an item',[{ text: 'Ok'}]) // title, message, [ button ]
    }else{
    setItems(prevItems=>{
      return [{id:uuidv4(),text:text},...prevItems];
    })}
  }
  const deleteItem = (id) => {
    setItems(prevItems=>{
      return prevItems.filter(item => item.id != id); // we update the state here by chaning prevState. filtering out.
    })
  }

  return(
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:0
  },
})

export default App;

// Things to note:
// Icons won't appear if you don't -> Link. and put ( apply from: "../../node_modules/react-native-vector-icons/fonts.gradle")
// in android/build.gradle file. 

// using JDK & JRE 8 and Normal Gradle Version. 
// Put the ANDROID_HOME(sdk path) and JAVA_HOME(jdk path). i changed name of jdk1.8.bla into jdk.
// in the System variables! Not user's variables which is on top. 
// and put the platform tools path in the path. 

// if haxm is installed via Android Studio, it is not recognized. Just install haxm sepearately using its installer.
// creating app be like - npm install -g react-native-cli.
// then react-native init <appname>