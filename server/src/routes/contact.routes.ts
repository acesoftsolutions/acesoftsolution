import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { Contact } from '../models';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// GET ALL CONTACTS
router.get(
  '/',
  protect,
  authorize('admin'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });

      res.json({
        status: 'success',
        data: contacts,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
);

// CREATE CONTACT
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const contact = await Contact.create(req.body);

      res.status(201).json({
        status: 'success',
        message: 'Message sent successfully',
        data: contact,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
);

// UPDATE CONTACT STATUS
router.put(
  '/:id',
  protect,
  authorize('admin'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );

      if (!contact) {
        res.status(404).json({
          status: 'error',
          message: 'Contact not found',
        });
        return;
      }

      res.json({
        status: 'success',
        data: contact,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
);

// DELETE CONTACT
router.delete(
  '/:id',
  protect,
  authorize('admin'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);

      if (!contact) {
        res.status(404).json({
          status: 'error',
          message: 'Contact not found',
        });
        return;
      }

      res.json({
        status: 'success',
        message: 'Contact deleted',
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
);

export default router;