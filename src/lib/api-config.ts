// API Configuration for Python Microservice
export const API_CONFIG = {
  // Update this URL to match your Python service endpoint
  BASE_URL: 'http://localhost:8000',  // Change this to your Python service URL
  
  ENDPOINTS: {
    START_RECORDING: '/api/recording/start',
    STOP_RECORDING: '/api/recording/stop',
    GET_RECORDINGS: '/api/recordings',
    SYSTEM_STATUS: '/api/status'
  }
} as const;

// API Helper Functions
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};