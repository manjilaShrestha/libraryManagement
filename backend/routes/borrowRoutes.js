import express from 'express';
import { borrowBook, returnBook } from '../controllers/borrowControllers.js';
import { authenticateToken, authorizeRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('borrower'), borrowBook);
router.post('/return', authenticateToken, authorizeRole('borrower'), returnBook);

export default router;
