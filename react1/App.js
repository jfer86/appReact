import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Formulario from './src/componente/formulario';
import Paciente from './src/componente/paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cita, setCita] = useState(null);
  const [citaEditada, setCitaEditada] = useState(null);

  const guardarCita = (nuevaCita) => {
    setCita(nuevaCita);
  };

  const limpiarCitaEditada = () => {
    setCitaEditada(null);
  };

  const eliminarCita = () => {
    setCita(null);
  };

  const editarCita = () => {
    setCitaEditada(cita);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        <View style={styles.contenido}>
          <Text style={styles.titulo}>Administración de citas</Text>

          <Text style={styles.subtitulo}>Crear cita</Text>

          <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
            <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
          </Pressable>

          {cita ? (
            <View>
              <Text style={styles.subtitulo}>Cita guardada:</Text>
              <Paciente item={cita} onEliminar={eliminarCita} onEditar={editarCita} />
            </View>
          ) : null}

          <Formulario
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            guardarCita={guardarCita}
            cita={citaEditada}
            limpiarCitaEditada={limpiarCitaEditada}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contenido: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7d024e',
    marginBottom: 20,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  btnNuevaCita: {
    backgroundColor: '#7d024e',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTextoNuevaCita: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;