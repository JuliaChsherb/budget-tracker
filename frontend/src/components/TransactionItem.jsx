import { useDispatch } from "react-redux"
import {deleteTransaction} from '../features/transactions/transactionSlice'

function TransactionItem({transaction}) {
    const dispatch = useDispatch()

    return (
        <div className="transaction">
            <div>
                {new Date(transaction.createdAt).toLocaleString('en-US')}
            </div>
            <h2>
                {transaction.text}
                <button onClick={() => dispatch(deleteTransaction(transaction._id))} className="close">X</button>
            </h2>
        </div>
    )
}

export default TransactionItem