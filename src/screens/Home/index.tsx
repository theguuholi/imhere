import { Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
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

      <Participant name="Gustavo" onRemove={handleParticipantRemove} />
      <Participant name="Bruno" onRemove={handleParticipantRemove} />
      <Participant name="Edu" onRemove={handleParticipantRemove} />
    </View>
  );
}
