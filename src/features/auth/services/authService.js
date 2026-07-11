const DEMO_USER = {
  id: 1,
  name: "Shagun Saxena",
  email: "admin@taskflow.com",
  role: "Project Manager",
};

const DEMO_CREDENTIALS = {
  email: "admin@taskflow.com",
  password: "password123",
};

export const login = async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if(email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
        return {
            success: true,
            user:DEMO_USER,
            token: "mock-jwt-token-123456",
        };
    }

    throw new Error("Invalid email or password");
};

export const logout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
        success: true,
    };
};