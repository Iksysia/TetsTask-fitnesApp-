import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator} from "react-native-paper";
import {useSteps} from "@/hooks/useSteps";
import StatsList from "@/screens/stats/partials/StatsList";

export const StatsScreen = () => {
  const { data: steps = [], isLoading } = useSteps();
  
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator size={'small'}/>}
      <View>
        <StatsList data={steps}/>
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
})
