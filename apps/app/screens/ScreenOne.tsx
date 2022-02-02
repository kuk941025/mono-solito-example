import { View, Text, StyleSheet } from "react-native";
import { TextLink } from "solito/link";

const ScreenOne: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextLink href="/screen-two">
        <Text>To Screen Two</Text>
      </TextLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScreenOne;
