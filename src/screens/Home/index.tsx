import { Text, TextInput, Pressable, View, FlatList } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  const participnts = [
    "Gustavo",
    "Bruno",
    "Edu",
    "Rafael",
    "Lucas",
    "Joao",
    "Pedro",
    "Paulo",
    "Marcos",
    "Felipe",
    "Carlos",
    "Rodrigo",
  ];

  handleParticipantAdd = () => {
    console.log("Add participant");
  };

  handleParticipantRemove = (name: string) => {
    console.log("Remove participant");
    console.log(name);
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
        />
        <Pressable style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participnts}
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
