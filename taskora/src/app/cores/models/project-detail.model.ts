export interface  ProjectDetail {
  indexId: number;        // Internal index ID
  projectUlId: string;           // Unique ID for the project
  name: string;         // Name of the project
  description?: string; // Optional project description
  createdBy: string;    // User ID who created the project
  createdAt: Date;      // Creation timestamp
  deadline?: Date;      // Optional deadline
  status: 'Active' | 'Completed' | 'On Hold'; // Project status
  priority?: 'Low' | 'Medium' | 'High';       // Optional priority
  tasks?: string[];     // Optional array of Task IDs
}
