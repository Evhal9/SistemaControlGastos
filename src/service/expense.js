import { API_BASE_URL } from '../utils/constants';

export const getExpensesByUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/expense/${userId}`);

  if (!response.ok) return [];

  return response.json();
};

export const createExpense = async (userId, expenseData) => {
  const response = await fetch(`${API_BASE_URL}/expense/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};

export const updateExpense = async (userId, expenseId, expenseData) => {
  const response = await fetch(`${API_BASE_URL}/expense/${userId}/${expenseId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};

export const deleteExpense = async (userId, expenseId) => {
  const response = await fetch(`${API_BASE_URL}/expense/${userId}/${expenseId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};