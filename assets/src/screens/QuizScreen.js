// Importation des modules nécessaires
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';  // Composant pour afficher les questions
import ScoreBoard from '../components/ScoreBoard';  // Composant pour afficher le score

// Définition du composant QuizScreen
const QuizScreen = ({ route, navigation }) => {
  // Récupération des données du quiz à partir des paramètres de navigation
  const { quizData } = route.params;
  
  // État pour suivre l'index de la question actuelle et le score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Fonction pour gérer la réponse sélectionnée
  const handleAnswer = (answer) => {
    // Vérification de la bonne réponse
    const correctAnswer = quizData?.questions?.[currentQuestionIndex]?.correctAnswer;
    
    // Mise à jour du score si la réponse est correcte
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    
    // Passage à la question suivante ou fin du quiz
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData?.questions?.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      // Navigation vers l'écran des résultats avec le score final
      navigation.navigate('Result', { score, totalQuestions: quizData?.questions?.length, quizData });
    }
  };

  return (
    // Conteneur principal de l'écran du quiz
    <View style={styles.container}>
      {/* Affichage du tableau des scores */}
      <ScoreBoard score={score} totalQuestions={quizData?.questions?.length} />
      
      {/* Affichage de la carte de question */}
      <QuestionCard 
        question={quizData?.questions?.[currentQuestionIndex]?.question}
        options={quizData?.questions?.[currentQuestionIndex]?.options}
        onSelect={handleAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',  
    gap: 30,
  },
});

export default QuizScreen;