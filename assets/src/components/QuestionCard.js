// Importation des modules nécessaires
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Importation des icônes

// Définition du composant QuestionCard
const QuestionCard = ({ question, options, onSelect }) => {
  return (
    // Conteneur principal de la carte
    <View style={styles.card}>
      {/* Affichage de la question */}
      <Text style={styles.question}>{question}</Text>
      
      {/* Boucle pour afficher toutes les options */}
      {options.map((option, index) => (
        <TouchableOpacity 
          key={index}  // Clé unique pour chaque option
          style={styles.optionButton}  // Style du bouton
          onPress={() => onSelect(option)}  // Fonction à appeler lorsqu'une option est sélectionnée
        >
          {/* Icône de musique pour chaque option */}
          <FontAwesome name="music" size={24} color="white" />
          
          {/* Texte de l'option */}
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Styles du composant
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    gap: 30,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    paddingLeft: 20,
    borderRadius: 30,
    marginBottom: 10,
    height: 60,
  },
  optionText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default QuestionCard;