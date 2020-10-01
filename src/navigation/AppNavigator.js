import React from 'react';
import GalleryPage from '../pages/GalleryPage';
import RecordPage from '../pages/RecordPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recorder" component={RecordPage} />
      <Tab.Screen name="Gallery" component={GalleryPage} />
    </Tab.Navigator>
  );
};
