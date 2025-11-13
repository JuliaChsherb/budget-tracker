const asyncHandler = require('express-async-handler')

// @desc    Get transactions
// @route   GET /api/transactions
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get transactions'})
})

// @desc    Create transaction
// @route   POST /api/transactions
// @access  Private
const createTransaction = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add amount and type fields')
    }

    res.status(200).json({ message: 'Create transaction' })
})

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
const updateTransaction = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update transaction ${req.params.id}`})
})

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
const deleteTransaction = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete transaction ${req.params.id}`})
})

module.exports = {
    getTransactions, 
    createTransaction, 
    updateTransaction, 
    deleteTransaction,
}