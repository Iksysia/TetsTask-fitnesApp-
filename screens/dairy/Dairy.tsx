import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {ActivityIndicator, Button, TextInput} from "react-native-paper";
import {useDairyController} from "@/screens/stats/controller/useDairyController";

export const DairyScreen = () => {
  
  const [stepsAmount, setStepsAmount, handleSubmit, isPending] = useDairyController()
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          mode={'outlined'}
          placeholder={'enter your steps'}
          label={'Your daily steps'}
          onChangeText={text => setStepsAmount(text)}
          value={stepsAmount?.toString()}
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit}
          labelStyle={styles.button} loading={isPending}
        >
          Save your steps
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    gap: 8,
    padding: 16,
  },
  button: {
    fontSize: 22,
    lineHeight: 22,
  }
});