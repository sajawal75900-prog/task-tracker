export interface Project {
  indexId: number;           // Unique ID for the project
  projectUlId: string;            // Unique string identifier
  name: string;         // Name of the project
  description?: string; // Optional project description
  createdBy: string;    // User ID who created the project
  createdAt: Date;      // Creation timestamp
  deadline?: Date;      // Optional deadline
  status: 'Active' | 'Completed' | 'On Hold'; // Project status
  priority?: 'Low' | 'Medium' | 'High';       // Optional priority
  tasks?: string[];     // Optional array of Task IDs
}
