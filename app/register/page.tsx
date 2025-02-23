'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Import CSS Module

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Registration Data:', { name, email, password });
    router.push('/learn');
  };

  return (
    <div className={styles.registerPageContainer}> {/* Use CSS Module class */}
      <div className={styles.registerFormContainer}> {/* Use CSS Module class */}
        <h2 className={styles.registerFormTitle}>Register</h2> {/* Use CSS Module class */}
        <form onSubmit={handleSubmit} className={styles.registerForm}> {/* Use CSS Module class */}
          <div className={styles.registerFormField}> {/* Use CSS Module class */}
            <label htmlFor="name" className={styles.registerLabel}> {/* Use CSS Module class */}
              Name:
            </label>
            <input
              type="text"
              id="name"
              className={`${styles.registerInput}`} 
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.registerFormField}> {/* Use CSS Module class */}
            <label htmlFor="email" className={styles.registerLabel}> {/* Use CSS Module class */}
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={styles.registerInput}
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.registerFormField}> {/* Use CSS Module class */}
            <label htmlFor="password" className={styles.registerLabel}> {/* Use CSS Module class */}
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.registerInput} 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.registerButtonContainer}> {/* Use CSS Module class */}
            <button
              className={styles.registerButton} 
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}