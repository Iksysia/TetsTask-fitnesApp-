import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Text, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useDairyController} from "@/screens/dairy/controller/useDairyController";

export const DairyScreen = () => {
  
  const [stepsAmount, setStepsAmount, handleSubmit, isPending, userInputError, clearErrors] = useDairyController()
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          clearTextOnFocus
          error={userInputError.isError}
          mode={'outlined'}
          placeholder={'enter your steps'}
          label={'Your daily steps'}
          onFocus={clearErrors}
          onChangeText={text => setStepsAmount(text)}
          value={stepsAmount?.toString()}
        />
        {
          userInputError.isError
          && <Text style={styles.error}>{userInputError.errorMessage}</Text>
        }
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
  },
  error: {
    color: 'red',
    fontSize: 14,
  }
});