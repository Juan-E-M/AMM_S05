import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    return (

        
        <View style={styles.container}>
        <Image source={{uri: 'https://humanidades.com/wp-content/uploads/2018/10/idiomas-1-e1582130289252.jpg'}} style={styles.image} />
        <View style={styles.overlay} />
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Aprende un nuevo idioma hoy mismo.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Acerca de")}>
          <Text style={styles.buttonText}>Saber más</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 30,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1E90FF',
    },
  });

export default HomeScreen;