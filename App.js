import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import AddListModal from "./components/AddListModal";

export default class App extends React.Component {
  state = {
    addVisible: false,
  };

  toggleAddModal() {
    this.setState({ addVisible: !this.state.addVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addVisible}
          onRequestClose={() => this.toggleAddModal()}
        >
          <View style={styles.modal}>
            <AddListModal closeModal={() => this.toggleAddModal()} />
          </View>
        </Modal>
        <View>
          <TouchableOpacity onPress={() => this.toggleAddModal()}>
            <Text>OPEN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
