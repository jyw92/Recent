import { View, Text } from 'react-native'
import React from 'react'

const ExpensesSummary = ({expenses, periodName}) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, );
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary