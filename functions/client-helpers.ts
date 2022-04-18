const API_URL = typeof window !== 'undefined' ? window.location.origin + '/api' : 'Sorry server, no hostmane for you';

export const getList = async () => {
  const res = await fetch(`${API_URL}/list`);

  return await res.json();
};

export const addListItem = async (text: string, max: number | undefined) => {
  const res = await fetch(`${API_URL}/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, max })
  });

  return await res.json();
}

export const clearList = async () => {
  const res = await fetch(`${API_URL}/list`, {
    method: 'DELETE'
  });

  return await res.json();
};

export const deleteItem = async (id: string) => {
  const res = await fetch(`${API_URL}/list/${id}`, {
    method: 'DELETE'
  });

  return await res.json();
};
