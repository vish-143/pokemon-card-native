import { StyleSheet, SafeAreaView, Platform, ScrollView, View, Switch, Text } from "react-native"
import PokemonCard from "./components/PokemonCard"
import { useState } from "react"

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const charmandarData = {
    name: "Charmandar",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"]
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.switchContainer}>
          <Text style={styles.darkModeText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={()=>setDarkMode((prevState)=>!prevState)} trackColor={{false:"#F0F0F0",true:"white"}} thumbColor={"#9BA4B5"}/>
        </View>
        <PokemonCard {...charmandarData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F2C59",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  darkModeText: {
    color: "#F8F0E5",
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default App