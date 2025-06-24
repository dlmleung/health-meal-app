import { supabase } from './supabaseClient';

// Function to track exercises
export async function trackExercise(userId, exerciseData) {
  const { data, error } = await supabase.from('exercises').insert({
    user_id: userId,
    ...exerciseData,
  });
  if (error) throw error;
  return data;
}

// Function to provide exercise suggestions
export async function suggestExercises(userId) {
  const { data: userProfile, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) throw error;

  const { activityLevel, fitnessGoals } = userProfile;

  // Placeholder for suggestion logic
  // Implement suggestion algorithm based on user activity level and goals
  const suggestions = [
    { exercise: 'Running', duration: '30 mins', intensity: 'Moderate' },
    { exercise: 'Yoga', duration: '45 mins', intensity: 'Low' },
  ];

  return suggestions.filter(exercise =>
    fitnessGoals.includes(exercise.intensity)
  );
}
