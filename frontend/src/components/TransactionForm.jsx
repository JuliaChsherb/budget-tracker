import { useState } from "react"
import { useDispatch } from "react-redux"
import {createTransaction} from '../features/transactions/transactionSlice'

function TransactionForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTransaction({text}))
        setText('')
    }

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Transaction</label>
                <input
                    type="text"
                    name='text'
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-grop">
                <button className="btn btn-block" type="submit">
                    Add Transaction
                </button>
            </div>
        </form>
    </section>
}

export default TransactionForm