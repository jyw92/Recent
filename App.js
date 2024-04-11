import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverView = () => {
  return (
    <BottomTabs.Navigator screenOptions={
        {
          
        }
      }
    >
      <BottomTabs.Screen 
        name='RecentExpenses' 
        component={RecentExpenses} 
      />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses} 
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="ManageExpense" 
            component={ManageExpense}
            options={
              {
                headerShown:false
              }
            }
          />
          <Stack.Screen 
            name="ExpensesOverView" 
            component={ExpensesOverView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
