import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// @ts-ignore
import xss from 'xss-clean';
import dotenv from 'dotenv';

import { connectDB } from './config/database';
import authRoutes from './routes/auth.routes';
import serviceRoutes from './routes/service.routes';
import portfolioRoutes from './routes/portfolio.routes';
import blogRoutes from './routes/blog.routes';
import contactRoutes from './routes/contact.routes';
import testimonialRoutes from './routes/testimonial.routes';
import newsletterRoutes from './routes/newsletter.routes';
import careerRoutes from './routes/career.routes';
import userRoutes from './routes/user.routes';
import settingsRoutes from './routes/settings.routes';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Data sanitization against XSS
app.use(xss());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/newsletters', newsletterRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings', settingsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);

    res.status(err.statusCode || 500).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
    });
  }
);

// Handle 404
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;