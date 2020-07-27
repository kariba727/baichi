import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from "react-native";
import AddCamera from "./AddCamera";

export default class AddListModal extends React.Component {
  state = {
    addCamera: false,
  };

  toggleAddModalCamera() {
    this.setState({ addCamera: !this.state.addCamera });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View>
          <Text style={styles.title}>Add</Text>
        </View>
        <View>
          <Modal
            animationType="slide"
            visible={this.state.addCamera}
            onRequestClose={() => this.toggleAddModalCamera()}
          >
            <View style={styles.modal}>
              <AddCamera />
            </View>
          </Modal>
          <TouchableOpacity onPress={() => this.toggleAddModalCamera()}>
            <Text>camera</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ color: "blue", top: 30 }}
          onPress={this.props.closeModal}
        >
          <Text>return</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  title: {
    position: "relative",
    top: -250,
    fontWeight: "bold",
    color: "red",
    fontSize: 40,
  },
  modal: { flex: 1 },
});
