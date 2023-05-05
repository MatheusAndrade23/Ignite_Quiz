import { View } from "react-native";

import TrophySvg from "../../assets/trophy.svg";

import { styles } from "./styles";

export const Stars = () => {
  return (
    <View style={styles.container}>
      <TrophySvg />
    </View>
  );
};
