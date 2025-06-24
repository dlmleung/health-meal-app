import { supabase } from './supabaseClient';

// Function to submit a support inquiry
export async function submitInquiry(userId, subject, message) {
  const { data, error } = await supabase.from('inquiries').insert({
    user_id: userId,
    subject,
    message,
    status: 'Pending',
  });
  if (error) throw error;
  return data;
}

// Function to fetch user inquiries
export async function fetchInquiries(userId) {
  const { data, error } = await supabase.from('inquiries').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
}

// Function to schedule an expert consultation
export async function scheduleConsultation(userId, expertId, dateTime) {
  const { data, error } = await supabase.from('consultations').insert({
    user_id: userId,
    expert_id: expertId,
    date_time: dateTime,
  });
  if (error) throw error;
  return data;
}
