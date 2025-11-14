const asyncHandler = require('express-async-handler')

const Transaction = require('../models/transactionModel')

// @desc    Get transactions
// @route   GET /api/transactions
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {
    const transactions = await Transaction.find()

    res.status(200).json(transactions)
})

// @desc    Create transaction
// @route   POST /api/transactions
// @access  Private
const createTransaction = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add amount and type fields')
    }

    const transaction = await Transaction.create({
        text: req.body.text
    })

    res.status(200).json(transaction)
})

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
const updateTransaction = asyncHandler(async (req, res) => {
const transaction = await Transaction.findById(req.params.id)

    if(!transaction) {
        res.status(400)
        throw new Error('Transaction not found')
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTransaction)
})

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
const deleteTransaction = asyncHandler(async (req, res) => {
const transaction = await Transaction.findById(req.params.id)

    if(!transaction) {
        res.status(400)
        throw new Error('Transaction not found')
    }

    await transaction.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTransactions, 
    createTransaction, 
    updateTransaction, 
    deleteTransaction,
}