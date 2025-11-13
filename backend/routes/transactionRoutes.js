const express = require('express')
const router = express.Router()
const {getTransaction, setTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactionController')

router.route('/').get(getTransaction).post(setTransaction)

router.route('/:id').delete(deleteTransaction).put(updateTransaction)

module.exports = router

