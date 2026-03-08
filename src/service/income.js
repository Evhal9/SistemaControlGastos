import { API_BASE_URL } from '../utils/constants';


export const getIncomesByUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/income/${userId}`);

  if (!response.ok) return [];

  return response.json();
};

export const createIncome = async (userId, incomeData) => {
  const response = await fetch(`${API_BASE_URL}/income/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(incomeData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};

export const updateIncome = async (userId, incomeId, incomeData) => {
  const response = await fetch(`${API_BASE_URL}/income/${userId}/${incomeId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(incomeData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};

export const deleteIncome = async (userId, incomeId) => {
  const response = await fetch(`${API_BASE_URL}/income/${userId}/${incomeId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};