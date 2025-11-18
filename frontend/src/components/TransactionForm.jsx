import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTransaction } from '../features/transactions/transactionSlice'

function TransactionForm() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')

  const dispatch = useDispatch()

  const { isLoading, isError, message } = useSelector((state) => state.transactions)

  const onSubmit = (e) => {
    e.preventDefault()

    // Автоматически определяем категорию на основе типа
    const defaultCategory = type === 'income' ? 'other-income' : 'other-expense'

    const transactionData = {
      text,
      amount: Number(amount),
      type,
      category: defaultCategory
    }

    dispatch(createTransaction(transactionData))

    // Очищаем форму
    setText('')
    setAmount('')
  }

  if (isLoading) {
    return <div>Adding transaction...</div>
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Transaction Description</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
      {isError && <div className="error">{message}</div>}
    </section>
  )
}

export default TransactionForm