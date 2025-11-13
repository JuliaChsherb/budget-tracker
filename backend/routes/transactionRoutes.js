const express = require('express')
const router = express.Router()
const { getTransactions,
        createTransaction,
        updateTransaction,
        deleteTransaction
    } = require('../controllers/transactionController')

router.route('/').get(getTransactions).post(createTransaction)

router.route('/:id').delete(deleteTransaction).put(updateTransaction)

module.exports = router

