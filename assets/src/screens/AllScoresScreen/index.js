// Importation des modules nécessaires
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getData } from '../../utils/asyncStorage';  // Fonctions utilitaires pour AsyncStorage

const AllScoresScreen = () => {
  // État local pour stocker les scores
  const [scores, setScores] = useState([]);

  // Utilisation de useEffect pour récupérer les scores depuis AsyncStorage
  useEffect(() => {
    const fetchScores = async () => {
      // Récupération des scores existants
      const existingScores = await getData('allScores');
      
      // Mise à jour de l'état local
      setScores(existingScores || []);
    };

    fetchScores();
  }, []);

  // Rendu du composant
  return (
    <View style={styles.container}>
      {/* Titre de l'écran */}
      <Text style={styles.title}>Mes Meilleurs Scores 🏆</Text>
      
      {/* Liste des scores */}
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scoreItem}>
            {/* Nom du quiz */}
            <Text style={styles.quizName}>{item.quiz}</Text>
            
            {/* Valeur du score */}
            <Text style={styles.scoreValue}>{`${Math.round((item.score / 10) * 100)}%`}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Styles du composant
const styles = StyleSheet.create({
  // ... (styles pour le conteneur principal et les autres éléments)
});

// Exportation du composant
export default AllScoresScreen;