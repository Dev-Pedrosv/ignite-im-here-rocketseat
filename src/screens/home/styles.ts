import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#686868",
    fontSize: 16,
    marginTop: 4,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: 36,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
