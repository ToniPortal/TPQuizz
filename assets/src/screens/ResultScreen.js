// Importation des modules nécessaires
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { storeData, getData } from '../utils/asyncStorage';  // Fonctions utilitaires pour AsyncStorage

const ResultScreen = ({ route, navigation }) => {
  // Récupération des données du quiz et du score à partir des paramètres de navigation
  const { score, totalQuestions, quizData } = route.params;

  // Calcul du pourcentage de réussite
  const percentage = ((score || 0) / (totalQuestions || 1)) * 100;

  // Logique pour déterminer les commentaires et les images en fonction du score
  // (le reste du code est similaire)
  if (percentage === 100) {
    comment = quizData.feedback.perfect.comment;
    imageSource = quizData.feedback.perfect.image;
  } else if (percentage >= 90) {
    comment = quizData.feedback.excellent.comment;
    imageSource = quizData.feedback.excellent.image;
  } else if (percentage >= 80) {
    comment = quizData.feedback.veryGood.comment;
    imageSource = quizData.feedback.veryGood.image;
  } else if (percentage >= 60) {
    comment = quizData.feedback.good.comment;
    imageSource = quizData.feedback.good.image;
  } else if (percentage >= 40) {
    comment = quizData.feedback.average.comment;
    imageSource = quizData.feedback.average.image;
  } else {
    comment = quizData.feedback.poor.comment;
    imageSource = quizData.feedback.poor.image;
  }
  useEffect(() => {
    const saveScore = async () => {
      // Récupération des scores existants
      const existingScores = await getData('allScores') || [];

      // Ajout du nouveau score
      const newScore = {
        id: new Date().toISOString(),
        quiz: quizData.quizTitle,
        score,
      };

      // Sauvegarde du tableau mis à jour
      await storeData('allScores', [...existingScores, newScore]);
    };

    saveScore();
  }, []);

  return (
    // Conteneur principal pour l'écran des résultats
    <View style={styles.container}>
      {/* Affichage du score et des commentaires */}
      <Text style={styles.scoreText}>Votre score : {percentage}%</Text>
      <Text style={styles.commentText}>{comment}</Text>

      {/* Affichage de l'image */}
      <Image source={{ uri: imageSource }} style={styles.image} />

      {/* Boutons pour naviguer vers d'autres écrans */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllScores')}>
        <Text style={styles.buttonText}>Voir tous les scores</Text>
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
    backgroundColor: '#f4f4f4',
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
  },
  commentText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ResultScreen;