import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {StepType} from "@/api/steps";
import dayjs from "dayjs";

type StatsListProps = {
  data: StepType[]
};

export const StatsList: React.FC<StatsListProps> = ({data}) => {
  if(!data.length) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          No data Available
        </Text>
      </View>)
  }
  return (
    <>
      {data.map(item => {
        return (
          <View key={item.id} style={styles.content}>
            <Text style={styles.text}>
              {`Date: ${dayjs(item.created_at).format('D.M.YYYY HH:mm')}`}
            </Text>
            <Text style={styles.text}>
              {`steps: ${item.steps}`}
            </Text>
          </View>
        )
      })}
    </>
  );
};

const styles = StyleSheet.create({
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

export default StatsList;
