import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/style';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const commonOptions = {
  headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
  tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
  tabBarActiveTintColor:GlobalStyles.colors.accent500,
  headerTintColor:'white',
  headerTitleAlign: 'center'
}
function ExpensesOverView(){
  return (
    <BottomTabs.Navigator screenOptions={commonOptions}>
      <BottomTabs.Screen 
        name='RecentExpenses' 
        component={RecentExpenses}
        options={{
          title:'Recent Expense',
          tabBarLabel:'Recent',
          tabBarIcon:({color, size}) => (<Ionicons name="hourglass" size={size} color={color}/>),
        }}
      />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses} 
        options={{
          title:'All Expenses',
          tabBarLabel:'All Expenses',
          tabBarIcon:({color, size}) => (<Ionicons name="calendar" size={size} color={color}/>),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen 
            name="ExpensesOverView" 
            component={ExpensesOverView}
          />
          <Stack.Screen 
            name="ManageExpense" 
            component={ManageExpense}
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
