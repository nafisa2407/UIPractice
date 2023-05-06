import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

function ModalEx() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <View
            style={{
              backgroundColor: '#17b814',
              height: 70,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -35,
              borderRadius: 35,
              borderColor: '#fff',
              borderWidth: 3,
            }}>
            <Image
              source={require('./images/check.png')}
              style={{
                height: 24,
                width: 24,
                // width: '80%',
                // height: '50%',
                alignSelf: 'center',
                // marginTop: 30,
                backgroundColor: '#fff',
                borderRadius: 12,
              }}
            />
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 22,
              fontWeight: '500',
              marginTop: 50,
            }}>
            Congratulations
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              width: '80%',
              alignself: 'center',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            You have just displayed this Awesome pop up view
          </Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>First Button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Second Button</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonStyle, styles.marginBottom]}>
            <Text style={styles.textStyle}>Done</Text>
          </TouchableOpacity>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#17b814',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  marginBottom: {marginBottom: 16},
  textStyle: {color: '#fff', fontSize: 18},
});
export default ModalEx;
