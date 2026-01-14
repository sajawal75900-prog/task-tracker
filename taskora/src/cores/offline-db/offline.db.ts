import Dexie from 'dexie';
import { Project } from '../models/project.model';

// Create the database
export class AppDatabase extends Dexie {
  projects!: Dexie.Table<Project, number>; // number is the primary key type (indexId)

  constructor() {
    super('MyAppDatabase');

    // Define the database schema
    this.version(1).stores({
      projects: '++indexId, projectUlId, name, createdBy, createdAt, status, priority'
      // '++indexId' => auto-incremented primary key
      // You can add indexed fields for faster queries
    });
  }
}

// Create an instance
export const db = new AppDatabase();
