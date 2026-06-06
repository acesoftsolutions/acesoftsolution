'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.email === 'admin@acesoft.com' && data.password === 'admin123') {
      const user = {
        _id: '1',
        name: 'Admin User',
        email: data.email,
        role: 'admin',
      };
      localStorage.setItem('user', JSON.stringify(user));
      toast({ title: 'Login Successful', description: 'Welcome back!' });
      router.push('/admin');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials',
        variant: 'destructive'
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-brown flex items-center justify-center">
              <span className="font-poppins font-bold text-white text-2xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-semibold text-white text-xl">Ace Soft</span>
              <span className="text-accent text-sm font-medium">Solution</span>
            </div>
          </Link>
          <h1 className="font-poppins text-3xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-muted">Sign in to access your admin dashboard</p>
        </div>

        <div className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="admin@acesoft.com"
                  className="input-field pl-12"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="input-field pl-12 pr-12"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                <span className="text-muted text-sm">Remember me</span>
              </label>
              <a href="#" className="text-accent text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-muted mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/(auth)/register" className="text-accent hover:underline">
            Contact Admin
          </Link>
        </p>

        <div className="glass rounded-xl p-4 mt-6 text-center">
          <p className="text-muted text-sm mb-2">Demo Credentials:</p>
          <p className="text-white text-sm">Email: admin@acesoft.com</p>
          <p className="text-white text-sm">Password: admin123</p>
        </div>
      </motion.div>
    </div>
  );
}
