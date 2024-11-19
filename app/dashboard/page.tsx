'use client';

import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react';

export default function dashboard() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>dashboard</h1>
      {isSignedIn ? <UserButton /> : <SignInButton />}
    </div>
  );
}