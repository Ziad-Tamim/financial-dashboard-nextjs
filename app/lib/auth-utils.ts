import { createHash } from 'crypto';

// A simple password hashing function that doesn't rely on native modules
export async function hashPassword(password: string): Promise<string> {
  // Use a simple SHA-256 hash with salt
  // Note: This is not as secure as bcrypt, but will work for development
  const salt = createHash('sha256').update(Math.random().toString()).digest('hex').substring(0, 16);
  const hash = createHash('sha256').update(password + salt).digest('hex');
  return `${salt}:${hash}`;
}

export async function comparePassword(storedPassword: string, suppliedPassword: string): Promise<boolean> {
  const [salt, storedHash] = storedPassword.split(':');
  const calculatedHash = createHash('sha256').update(suppliedPassword + salt).digest('hex');
  return calculatedHash === storedHash;
} 