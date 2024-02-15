import {
  Text,
  TextInput,
  Pressable,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState<string>("");

  handleParticipantAdd = () => {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante Existe",
        "Ja existe alguem com esse nome!"
      );
    }
    setParticipants((prevState) => [...prevState, newParticipant]);
    setNewParticipant("");
  };

  handleParticipantRemove = (name: string) => {
    Alert.alert("Remove", `Remover o participante ${name}?`, [
      {
        text: "Y",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((item) => item !== name)
          ),
      },
      { text: "N", style: "cancel" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Friday, 4th November . 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Guest Name"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        <Pressable style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguem chegou no evento ainda? adicione Participantes na sua lista
            de presenca
          </Text>
        )}
      ></FlatList>
    </View>
  );
}
