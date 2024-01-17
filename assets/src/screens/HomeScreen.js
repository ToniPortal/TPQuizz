// Importation des modules nécessaires
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Importation de la bibliothèque d'icônes

// Définition du composant HomeScreen
const HomeScreen = ({ navigation }) => {
  return (
    // Conteneur principal
    <View style={styles.container}>
      {/* Titre de l'écran d'accueil */}
      <Text style={styles.title}>Bienvenue au Quiz de Culture Pop 🎉</Text>
      
      {/* Bouton pour démarrer un quiz */}
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('QuizSelection')}  // Navigation vers l'écran de sélection de quiz
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Icône "play" */}
          <FontAwesome name="play" size={24} color="white" />
          {/* Texte du bouton */}
          <Text style={styles.buttonText}>Démarrer un Quiz</Text>
        </View>
      </TouchableOpacity>
      
      {/* Bouton pour voir les scores */}
      <TouchableOpacity 
        style={styles.scoresButton} 
        onPress={() => navigation.navigate('AllScores')}  // Navigation vers l'écran de tous les scores
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Icône "trophy" */}
          <FontAwesome name="trophy" size={24} color="white" />
          {/* Texte du bouton */}
          <Text style={styles.buttonText}>Mes Scores</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 80,
    textAlign: 'center',
  },
  startButton: {
    flexDirection: 'row',  // Pour aligner l'icône et le texte côte à côte
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',  // Centrer verticalement
    marginTop: 10,

  },
  scoresButton: {
    flexDirection: 'row',  // Pour aligner l'icône et le texte côte à côte
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',  // Centrer verticalement
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,  // Espacement entre l'icône et le texte
  },
});

export default HomeScreen;