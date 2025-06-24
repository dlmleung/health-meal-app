import { supabase } from './supabaseClient';

// Function to add a fitness center
export async function addFitnessCenter(name, location, facilities) {
  const { data, error } = await supabase.from('fitness_centers').insert({
    name,
    location,
    facilities,
  });
  if (error) throw error;
  return data;
}

// Function to fetch fitness centers
export async function fetchFitnessCenters() {
  const { data, error } = await supabase.from('fitness_centers').select('*');
  if (error) throw error;
  return data;
}

// Function to book a course
export async function bookCourse(userId, courseId) {
  const { data, error } = await supabase.from('bookings').insert({
    user_id: userId,
    course_id: courseId,
    status: 'Booked',
  });
  if (error) throw error;
  return data;
}
