import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dairy',
          animation: 'shift',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          animation: 'shift',
        }}
      />
    </Tabs>
  );
}
