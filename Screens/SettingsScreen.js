import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const LanguageCard = ({ language, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{language}</Text>
    </TouchableOpacity>
  );
};

const SettingScreen = () => {
  const languages = [
    { name: 'Inglés', image: 'https://www.itds.edu.bo/wp-content/uploads/elementor/thumbs/INGLES-pd4qop1s0oym3e8gnq052ms9thmqqalzhspf0gh3ns.jpg' },
    { name: 'Español', image: 'https://www.itds.edu.bo/wp-content/uploads/elementor/thumbs/INGLES-pd4qop1s0oym3e8gnq052ms9thmqqalzhspf0gh3ns.jpg'  },
    { name: 'Francés', image: 'https://www.itds.edu.bo/wp-content/uploads/elementor/thumbs/INGLES-pd4qop1s0oym3e8gnq052ms9thmqqalzhspf0gh3ns.jpg' },
    { name: 'Alemán', image: 'https://www.itds.edu.bo/wp-content/uploads/elementor/thumbs/INGLES-pd4qop1s0oym3e8gnq052ms9thmqqalzhspf0gh3ns.jpg' },
    { name: 'Italiano', image: 'https://www.itds.edu.bo/wp-content/uploads/elementor/thumbs/INGLES-pd4qop1s0oym3e8gnq052ms9thmqqalzhspf0gh3ns.jpg' },
  ];

  return (
    <View style={styles.container}>
      {languages.map((language, index) => (
        <LanguageCard
          key={index}
          language={language.name}
          image={language.image}
          onPress={() => console.log(`Clicked ${language.name} card`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingScreen;
