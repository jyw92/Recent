import { View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description:'뉴발란스 530',
    amount:59.99,
    date:new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description:'뉴발란스 530',
    amount:89.29,
    date:new Date('2022-01-05'),
  },
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      <ExpensesList/>
    </View>
  )
}

export default ExpensesOutput