import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = { uri: "https://ichef.bbci.co.uk/news/640/cpsprodpb/ACFF/production/_116778244_gettyimages-905514896.jpg" };

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <Text style={styles.title}>Acerca de nuestra aplicación</Text>
        <Text style={styles.description}>Somos una aplicación de idiomas diseñada para ayudarte a aprender y mejorar tus habilidades en diferentes lenguas del mundo. Nuestro objetivo es proporcionarte las herramientas necesarias para que puedas comunicarte efectivamente en cualquier idioma que desees.</Text>
        <Text style={styles.description}>Con nuestra aplicación, podrás acceder a diferentes lecciones y ejercicios que te ayudarán a mejorar tu gramática, vocabulario, pronunciación y comprensión oral y escrita en diferentes idiomas. También contamos con un equipo de tutores profesionales que están disponibles para brindarte apoyo y asesoría personalizada en caso de que lo necesites.</Text>
        <Text style={styles.description}>Gracias por elegir nuestra aplicación. ¡Que disfrutes aprendiendo idiomas con nosotros!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StackScreen;