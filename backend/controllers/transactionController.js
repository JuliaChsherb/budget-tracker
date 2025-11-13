// @desc    Get transactions
// @route   GET /api/transactions
// @access  Private

const getTransaction = (req, res) => {
    res.status(200).json({ message: 'Get transactions'})
}

// @desc    Create transaction
// @route   POST /api/transactions
// @access  Private
const setTransaction = (req, res) => {
    res.status(200).json({ message: 'Create transaction' })
}

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
const updateTransaction = (req, res) => {
    res.status(200).json({message: `Update transaction ${req.params.id}`})
}

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
const deleteTransaction = (req, res) => {
    res.status(200).json({message: `Delete transaction ${req.params.id}`})
}



module.exports = {
    getTransaction, 
    setTransaction, 
    updateTransaction, 
    deleteTransaction,
}