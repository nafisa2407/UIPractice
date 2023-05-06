import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const BottomSheet = () => {
    const refRBSheet = useRef();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <View>
            <Text>I am checking it</Text>
        </View>
      </RBSheet>
    </View>
  );
};

export default BottomSheet;
