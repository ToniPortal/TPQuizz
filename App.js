// Importation des modules nécessaires
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Conteneur de navigation principal
import AppNavigator from './assets/src/Navigator';  // Importation du gestionnaire de navigation personnalisé
import BottomTab from './assets/src/Navigator';

import firebaseApp from "./assets/src/lib/FirebaseConfig";  // Importez l'application Firebase initialisée

// Définition du composant App, le point d'entrée de l'application
const App = () => {
  return (
    // Conteneur de navigation qui englobe toute l'application
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

// Exportation du composant App pour qu'il soit le point d'entrée de l'application
export default App;