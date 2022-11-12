import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participants } from "../../components/participants";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Pedro",
    "Rafael",
    "Kayke",
    "Marcus",
    "Pedro",
    "Rafael",
    "Kayke",
    "Marcus",
  ];

  const handleParticipantAdd = (participant: string) => {
    if (participants.includes("Pedro")) {
      return Alert.alert("Participante existe");
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado !"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 11 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <Participants
            key={index}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém apareceu no evento ainda ? Adicione participantes a sua
            lista de presença!
          </Text>
        )}
      />
    </View>
  );
}
