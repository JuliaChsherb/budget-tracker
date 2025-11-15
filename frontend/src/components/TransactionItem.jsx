function TransactionItem({transaction}) {
    return (
        <div className="transaction">
            <div>
                {new Date(transaction.createdAt).toLocaleString('')}
            </div>
            <h2>
                {transaction.text}
            </h2>
        </div>
    )
}

export default TransactionItem