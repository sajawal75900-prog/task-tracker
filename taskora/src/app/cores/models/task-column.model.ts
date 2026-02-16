export interface TaskColumn {
  id: string;              // unique (uuid / ulid)
  projectIndexId: number;
  projectUlId: string;

  name: string;            // user-defined (e.g. "Blocked", "QA", "Ready")
  order: number;           // for Kanban ordering
  color?: string;

  createdAt: Date;
}
