import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Paciente = ({item, onEditar, onEliminar}) => {
  const {nombre, fecha, hora,genero, sintomas} = item;
   return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.texto}>{nombre}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.texto}>{fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Text style={styles.texto}>{hora}</Text>
      </View>
      <View>
        <Text style={styles.label}>genero:</Text>
        <Text style={styles.texto}>{genero}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.texto}>{sintomas}</Text>
      </View>
      
      <View style={styles.botones}>
        <Pressable style={styles.btnEliminar} onPress={onEliminar}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
        <Pressable style={styles.btnEditar} onPress={onEditar}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cita: {
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 14, 
      textTransform: 'uppercase',
      marginBottom: 5,
      color: '#7d024e',
    },
    texto: {
      fontSize: 16, 
      lineHeight: 20, 
      color: '#4a4a4a',
      marginBottom: 10, 
    },
    botones: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
      alignItems: 'center',
    },
    btnEliminar: {
      backgroundColor: '#d32f2f',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginRight: 10,
    },
    btnEditar: {
      backgroundColor: '#1976d2',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    btnTexto: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default Paciente;