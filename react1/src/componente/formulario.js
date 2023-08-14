import React, { useState, useEffect } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ modalVisible, setModalVisible, guardarCita, cita, limpiarCitaEditada }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [genero, setGenero] = useState('');

  useEffect(() => {
    if (cita) {
      setNombre(cita.nombre);
      setFecha(cita.fecha);
      setHora(cita.hora);
      setSintomas(cita.sintomas);
      setGenero(cita.genero);
    } else {
      limpiarCampos();
    }
  }, [cita]);

  const limpiarCampos = () => {
    setNombre('');
    setFecha('');
    setHora('');
    setSintomas('');
    setGenero('');
  };

  // Función de validación de fecha y hora
  const validarFechaHora = () => {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    const horaRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!fechaRegex.test(fecha)) {
      Alert.alert('Error', 'El formato de fecha es incorrecto. Debe ser AAAA-MM-DD');
      return false;
    }
    if (!horaRegex.test(hora)) {
      Alert.alert('Error', 'El formato de hora es incorrecto. Debe ser HH:MM en formato de hora militar');
      return false;
    }
    return true;
  };

  const handleCita = () => {
    if ([nombre, fecha, hora, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!validarFechaHora()) {
      return;
    }

    const nuevaCita = { id: Date.now(), nombre, fecha, hora, sintomas, genero };
    guardarCita(nuevaCita);
    setModalVisible(false);
  };

  const handleEditar = () => {
    if ([nombre, fecha, hora, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!validarFechaHora()) {
      return;
    }

    const citaEditada = { id: cita.id, nombre, fecha, hora, sintomas, genero };
    guardarCita(citaEditada);
    setModalVisible(false);
    limpiarCitaEditada();
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modal}>
        <Text style={styles.titulo}>Crear nueva cita</Text>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del paciente"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Fecha:</Text>
        <TextInput
          style={styles.input}
          placeholder="AAAA-MM-DD"
          value={fecha}
          onChangeText={setFecha}
        />

        <Text style={styles.label}>Hora:</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          value={hora}
          onChangeText={setHora}
        />

        <Text style={styles.label}>Síntomas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Síntomas del paciente"
          value={sintomas}
          onChangeText={setSintomas}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Género:</Text>
        <Picker
          style={styles.picker}
          selectedValue={genero}
          onValueChange={setGenero}
        >
          <Picker.Item label="Seleccione el género" value="" />
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Femenino" value="F" />
          <Picker.Item label="No binario" value="NB" />
        </Picker>

        {cita ? (
          <Pressable style={styles.btn} onPress={handleEditar}>
            <Text style={styles.btnTexto}>Guardar cambios</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.btn} onPress={handleCita}>
            <Text style={styles.btnTexto}>Agregar cita</Text>
          </Pressable>
        )}

        <Pressable style={styles.btnCancelar} onPress={() => {
          setModalVisible(false);
          limpiarCitaEditada();
        }}>
          <Text style={styles.btnTextoCancelar}>Cancelar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  btnTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnCancelar: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF0000',
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  btnTextoCancelar: {
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default Formulario;