import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TransactionForm from "../components/TransactionForm"
import TransactionItem from "../components/TransactionItem"
import Spinner from '../components/Spinner'
import { getTransactions, reset } from "../features/transactions/transactionSlice"
import { calculateStats } from "../utils/calculateStats"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { transactions, isLoading, isError, message } = useSelector((state) => state.transactions)

  const stats = calculateStats(transactions)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
      return
    }

    dispatch(getTransactions())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (!user) {
    return (
      <section className="heading">
        <h1>Please log in to see your transactions</h1>
      </section>
    )
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Transactions Dashboard</p>
      </section>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <TransactionForm />
          
        </aside>

        <main className="main-content">
          <section className="stats">
            <div className="stat-card">
              <h3>Current Balance</h3>
              <p className={`balance ${stats.balance >= 0 ? 'positive' : 'negative'}`}>
                ${stats.balance.toFixed(2)}
              </p>
            </div>
            
            <div className="stat-card">
              <h3>Monthly Income</h3>
              <p className="income">+${stats.monthlyIncome.toFixed(2)}</p>
            </div>
            
            <div className="stat-card">
              <h3>Monthly Expenses</h3>
              <p className="expense">-${stats.monthlyExpenses.toFixed(2)}</p>
            </div>
            
            <div className="stat-card">
              <h3>Transactions</h3>
              <p className="count">{stats.monthlyCount} in this month</p>
            </div>
          </section>

          <section className="content">
            {transactions.length > 0 ? (
              <div className="transactions">
                {transactions.map((transaction) => (
                  <TransactionItem key={transaction._id} transaction={transaction} />
                ))}
              </div>
            ) : (
              <h3>You have not set any transactions</h3>
            )}
          </section>
        </main>
      </div>
    </>
  )
}

export default Dashboard