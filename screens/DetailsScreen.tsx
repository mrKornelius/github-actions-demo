import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  return (
    <View style={s.container}>
      <Text>Details screen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
