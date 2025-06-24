import { supabase } from './supabaseClient';

// Function to sign up a new user
export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return user;
}

// Function to log in an existing user
export async function logIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return user;
}

// Function to log out the current user
export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Function to update user profile
export async function updateUserProfile(userId, profileData) {
  const { data, error } = await supabase.from('profiles').update(profileData).eq('id', userId);
  if (error) throw error;
  return data;
}

// Function to fetch user profile
export async function fetchUserProfile(userId) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) throw error;
  return data;
}

// Function to register with social media
export async function signInWithProvider(provider) {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider,
  });
  if (error) throw error;
  return user;
}

// Function to reset password
export async function resetPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
  return data;
}
