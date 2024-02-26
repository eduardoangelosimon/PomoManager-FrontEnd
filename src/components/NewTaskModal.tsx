import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NewTaskModal = () => {
  return (
    <Modal animationType="slide" transparent={true} visible={false} onRequestClose={() => {}}>
      <TouchableOpacity activeOpacity={1} onPress={() => {}} style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => {}} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.modalBody}>
              <Text>Teste</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {
    padding: 20,
    paddingBottom: "100%", // Adjust this value to increase or decrease space on top
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#007BFF",
  },
  modalBody: {
    marginTop: 10,
  },
});

export default NewTaskModal;
