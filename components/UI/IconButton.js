import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({icon, size, colour, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons
        name={icon}
        size={size}
        color={colour}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.7
  }
});
