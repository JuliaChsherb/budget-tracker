export const calculateStats = (transactions) => {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const monthlyTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(transaction.createdAt)
    return transactionDate.getMonth() === currentMonth && 
           transactionDate.getFullYear() === currentYear
  })

  const monthlyIncome = monthlyTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const monthlyExpenses = monthlyTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  return {
    balance,
    totalIncome,
    totalExpenses,
    monthlyIncome, 
    monthlyExpenses,
    monthlyCount: monthlyTransactions.length
  }
}