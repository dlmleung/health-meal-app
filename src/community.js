import { supabase } from './supabaseClient';

// Function to post a new discussion
export async function postDiscussion(userId, title, content) {
  const { data, error } = await supabase.from('discussions').insert({
    user_id: userId,
    title,
    content,
  });
  if (error) throw error;
  return data;
}

// Function to fetch discussions
export async function fetchDiscussions() {
  const { data, error } = await supabase.from('discussions').select('*');
  if (error) throw error;
  return data;
}

// Function to post a comment on a discussion
export async function postComment(userId, discussionId, content) {
  const { data, error } = await supabase.from('comments').insert({
    user_id: userId,
    discussion_id: discussionId,
    content,
  });
  if (error) throw error;
  return data;
}
