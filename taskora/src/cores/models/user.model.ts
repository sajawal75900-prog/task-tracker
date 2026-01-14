export interface User {
  indexId: number;               // Unique user ID
  userUlId: string;              // Unique string identifier
  name: string;             // Full name
  email: string;            // Email address
  role: 'Admin' | 'Member'; // User role
  avatar: string;           // Avatar or initials
  projects: string[];       // List of Project IDs the user belongs to
}
