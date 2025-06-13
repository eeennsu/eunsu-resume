const fetchHandler = async <T extends Record<string, any>>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const isServer = typeof window === 'undefined';
    const apiUrl = isServer ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${url}` : `/api${url}`;

    const response = await fetch(apiUrl, options);

    if (response.ok) {
      return response.json() as Promise<T>;
    }

    return { statusText: response.statusText } as unknown as T;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchHandler;
