import { supabase } from './supabaseClient';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

let model;

// Function to upload food image
export async function uploadFoodImage(file) {
  const { data, error } = await supabase.storage.from('food-images').upload(`public/${file.name}`, file);
  if (error) throw error;
  return data;
}

// Function to analyze food image
export async function analyzeFoodImage(imageUrl) {
  // Placeholder for AI analysis logic
  // Implement AI model integration here
  return { calories: 200, nutrients: { protein: 10, carbs: 30, fat: 5 } };
}

// Load the MobileNet model
export async function loadModel() {
  model = await mobilenet.load();
}

// Function to predict food items from an image
export async function predictFood(imageElement) {
  if (!model) {
    await loadModel();
  }
  const predictions = await model.classify(imageElement);
  return predictions;
}
