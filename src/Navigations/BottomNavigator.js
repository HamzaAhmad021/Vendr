import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NAVIGATION_ROUTES } from './NavigationRoutes';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTab from '../Screens/Home/HomeTab';
import ChatTab from '../Screens/Home/ChatTab';
import { FONTS } from '../Assets/Themes';

const Bottom = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: style.tabBar,
          tabBarIcon: ({ focused }) => {
            let IconName;
            let label;
            switch (route.name) {
              case NAVIGATION_ROUTES.HOME:
                IconName = 'home-sharp';
                label = 'Home';
                break;
              case NAVIGATION_ROUTES.CHATSCREEN:
                IconName = 'chatbox-ellipses-sharp';
                label = 'Chat';
                break;
            }
            if (IconName && label) {
              return (
                <View style={style.tabLabels}>
                  {focused && <View style={style.activeLine} />}
                  <Ionicons
                    name={IconName}
                    size={25}
                    color={focused ? 'orange' : '#98A1AA'}
                  />
                  <View style={{ marginTop: 2 }}>
                    <Text
                      style={{
                        color: focused ? 'orange' : '#98A1AA',
                        fontSize: 12,
                        fontFamily: FONTS.Baumans_Regular,
                      }}
                    >
                      {label}
                    </Text>
                  </View>
                </View>
              );
            }
          },
        })}
      >
        <Bottom.Screen name={NAVIGATION_ROUTES.HOME} component={HomeTab} />

        <Bottom.Screen
          name="Plus"
          component={() => null}
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                style={style.plusButtonContainer}
                //disabled={loadingAd}
                //onPress={handlePlusPress}
              >
                <View style={style.plusButton}>
                  <AntDesign name="plus" color="white" size={30} />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Bottom.Screen
          name={NAVIGATION_ROUTES.CHATSCREEN}
          component={ChatTab}
        />
      </Bottom.Navigator>
    </SafeAreaView>
  );
};
export default BottomNavigation;

const style = StyleSheet.create({
  tabBar: {
    //flex: 1,
    height: 65,
    position: 'absolute',
    backgroundColor: '#F8F8F8',
    borderRadius: 40,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 1.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  tabLabels: {
    alignItems: 'center',
    width: 60,
    // justifyContent: 'center',
    // marginTop: 25,
    height: 25,
    //paddingVertical: 8,
  },
  plusButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  activeLine: {
    position: 'absolute',
    top: -7,
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'orange',
  },
});
