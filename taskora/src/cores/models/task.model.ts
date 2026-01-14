export interface Task {
  indexId: number;
  taskUlId: string;
  title: string;
  description?: string;
  projectId: string;
  assignedTo?: string[]; // multiple users
  status: 'To Do' | 'In Progress' | 'Review' | 'Done';
  priority?: 'Low' | 'Medium' | 'High' | 'Urgent';
  type?: 'Bug' | 'Feature' | 'Improvement' | 'Task';
  startDate?: Date;
  dueDate?: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt?: Date;
  subTasks?: string[];
  tags?: string[];
  attachments?: string[];
}
