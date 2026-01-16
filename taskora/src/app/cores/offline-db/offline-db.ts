import Dexie, { Table } from 'dexie';
import { ProjectDetail } from '../models/project-detail.model';

export class OfflineDb extends Dexie {

  projects!: Table<ProjectDetail, number>;

  constructor() {
    super('TaskFlowOfflineDB');

    this.version(1).stores({
      projects: '++indexId, projectUlId, name, status, priority'
    });
  }
}

// Single DB instance
export const db = new OfflineDb();
