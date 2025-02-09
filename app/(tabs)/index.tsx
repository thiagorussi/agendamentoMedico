import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert, StyleSheet, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Card, TextInput } from "react-native-paper";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    loadAppointments();
  }, []);

  const saveAppointment = async () => {
    if (!date || !hour) {
      Alert.alert("Erro", "Por favor, selecione a data e a hora.");
      return;
    }

    const newAppointment = { id: Date.now().toString(), date: date.toLocaleDateString(), hour };
    const updatedAppointments = [...appointments, newAppointment];

    await AsyncStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    setHour("");
  };

  const loadAppointments = async () => {
    const savedAppointments = await AsyncStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  };

  const deleteAppointment = async (id) => {
    const updatedAppointments = appointments.filter((item) => item.id !== id);
    await AsyncStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>

      <Button mode="outlined" onPress={() => setShowDatePicker(true)}>
        Selecionar Data: {date.toLocaleDateString()}
      </Button>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TextInput
        label="Horário (Ex: 14:00)"
        value={hour}
        onChangeText={setHour}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button mode="contained" onPress={saveAppointment} style={styles.button}>
        Agendar
      </Button>

      <Text style={styles.subtitle}>Consultas Agendadas:</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>📅 {item.date} ⏰ {item.hour}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => deleteAppointment(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
});
