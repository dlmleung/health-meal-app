// Function to place an order
export async function placeOrder(userId, menuSelection) {
  const { data, error } = await supabase.from('orders').insert({
    user_id: userId,
    items: menuSelection,
    status: 'Pending',
  });
  if (error) throw error;
  return data;
}

// Function to manage orders
export async function manageOrders(userId) {
  const { data, error } = await supabase.from('orders').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
}

// Function to update order status
export async function updateOrderStatus(orderId, newStatus) {
  const { data, error } = await supabase.from('orders').update({ status: newStatus }).eq('id', orderId);
  if (error) throw error;
  return data;
}
