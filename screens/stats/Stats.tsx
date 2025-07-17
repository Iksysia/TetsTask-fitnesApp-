import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator} from "react-native-paper";
import {useSteps} from "@/hooks/useSteps";
import dayjs from "dayjs";

export const StatsScreen = () => {
  const { data: steps = [], isLoading } = useSteps();
  
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator size={'small'}/>}
      <View>
        {steps.map(item => {
          return (
            <View key={item.id} style={styles.content}>
              <Text style={styles.text}>{`Date: ${dayjs(item.created_at).format('D.M.YYYY HH:mm')}`}</Text>
              <Text style={styles.text}>{`steps: ${item.steps}`}</Text>
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
})
