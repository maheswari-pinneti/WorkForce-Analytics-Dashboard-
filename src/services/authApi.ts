export type UserRole = "Admin" | "HR" | "Manager" | "Employee";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  role: UserRole;
}

interface MockUser extends AuthUser {
  password: string;
}

const STORAGE_KEY = "auth_user";

const mockUsers: MockUser[] = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "Admin",
  },
  {
    id: 2,
    username: "hr",
    password: "hr123",
    role: "HR",
  },
  {
    id: 3,
    username: "manager",
    password: "manager123",
    role: "Manager",
  },
  {
    id: 4,
    username: "employee",
    password: "employee123",
    role: "Employee",
  },
];

const authApi = {
  login(payload: LoginPayload): AuthUser {
    const user = mockUsers.find(
      (u) =>
        u.username === payload.username &&
        u.password === payload.password
    );

    if (!user) {
      throw new Error("Invalid username or password.");
    }

    const authUser: AuthUser = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    this.saveUser(authUser);

    return authUser;
  },

  saveUser(user: AuthUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },

  getCurrentUser(): AuthUser | null {
    const user = localStorage.getItem(STORAGE_KEY);

    if (!user) {
      return null;
    }

    return JSON.parse(user) as AuthUser;
  },

  removeUser() {
    localStorage.removeItem(STORAGE_KEY);
  },

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },
};

export default authApi;