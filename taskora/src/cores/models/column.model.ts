export interface Column {
  indexId: number;
  columnUlId: string;
  name: string;
  projectId: string;
  order: number;          // For board ordering
  tasks?: string[];       // Array of Task IDs
  createdBy?: string;
  createdAt?: Date;
}
