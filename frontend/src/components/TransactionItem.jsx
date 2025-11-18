import { useDispatch } from "react-redux"
import {deleteTransaction} from '../features/transactions/transactionSlice'

function TransactionItem({transaction}) {
    const dispatch = useDispatch()

    return (
        <div className={`transaction ${transaction.type}`}>
            <div className="transaction-details">
                <h4>{transaction.text}</h4>
                <p>
                    {new Date(transaction.createdAt).toLocaleString('en-US')} • 
                    {transaction.type === 'income' ? 'Income' : 'Expense'}
                </p>
            </div>
            <div className={`amount ${transaction.type}`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
            </div>
            <button 
                onClick={() => dispatch(deleteTransaction(transaction._id))} 
                className="close"
            >
                X
            </button>
        </div>
    )
}

export default TransactionItem