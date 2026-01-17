import { TaskPriority } from "../enums/task-priority.enum";
import { TaskType } from "../enums/task-type.enum";

export interface Task {
  id: string;

  projectIndexId: number;
  projectUlId: string;

  title: string;
  description?: string;

  projectId: string;

  assignedTo?: string[];

   status?: 'To Do' | 'In Progress' | 'Review' | 'Done';
  priority?: TaskPriority;
  type: TaskType;

  startDate?: Date;
  dueDate?: Date;

  createdBy: string;
  createdAt: Date;
  updatedAt?: Date;

  subTasks?: string[];
  tags?: string[];
  attachments?: string[];
}




