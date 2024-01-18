// Importation des modules nécessaires
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importation de la bibliothèque d'icônes

// Importation des fichiers JSON contenant les données des quiz
import michaelJacksonQuiz from '../data/michaelJacksonQuiz';
import famousMoviesQuiz from '../data/famousMoviesQuiz';
import famousSongsQuiz from '../data/famousMoviesQuiz';
import scienceFictionQuiz from '../data/scienceFictionQuiz';


// Définition du composant QuizSelectionScreen
const QuizSelectionScreen = ({ navigation }) => {
  // État local pour stocker les quiz disponibles
  const [quizzes, setQuizzes] = useState([
    { id: '1', title: 'Quiz sur Michael Jackson', data: michaelJacksonQuiz, icon: 'music-note' },
    { id: '2', title: 'Quiz sur les films célèbres', data: famousMoviesQuiz, icon: 'movie' },
    { id: '3', title: 'Quiz sur les chansons célèbres', data: famousSongsQuiz, icon: 'library-music' },
    { id: '4', title: 'Quiz sur la scienceFiction', data: scienceFictionQuiz, icon: 'science' },
  ]);

  // Fonction pour gérer la sélection d'un quiz
  const handleQuizSelection = (quizData) => {
    // Navigation vers l'écran du quiz avec les données du quiz sélectionné
    navigation.navigate('Quiz', { quizData });
  };

  return (
    // Conteneur principal
    <View style={styles.container}>
      {/* Titre de l'écran */}
      <Text style={styles.header}>Sélectionnez un quiz 🎉</Text>
      
      {/* Liste des quiz disponibles */}
      <FlatList
        data={quizzes}  // Données à afficher
        keyExtractor={(item) => item.id}  // Clé unique pour chaque élément
        style={styles.list}
        renderItem={({ item }) => (
          // Élément de la liste (un quiz)
          <TouchableOpacity style={styles.quizItem} onPress={() => handleQuizSelection(item.data)}>
            {/* Icône du quiz */}
            <MaterialIcons name={item.icon} size={24} color="white" />
            {/* Titre du quiz */}
            <Text style={styles.quizTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    gap: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  quizItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    marginBottom: 40,
  },
  quizTitle: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
  },
});

export default QuizSelectionScreen;