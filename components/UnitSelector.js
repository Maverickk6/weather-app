import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitSelector({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode='dropdown'
      >
        <Picker.Item label="°C" value="metric" />
        <Picker.Item label="°F" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    unitsystem : { 
        position: 'absolute',
        ...Platform.select({
            ios : {
                top : 20,
            },
            android : { 
                top: 20,
            }
        }),
        top: 20,
        left: 20,
        height: 50,
        width: 100,
    }
})