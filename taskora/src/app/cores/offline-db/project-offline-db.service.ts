import { Injectable } from '@angular/core';
import { ProjectDetail } from '../models/project-detail.model';
import { db, OfflineDb } from './offline-db';

@Injectable({
  providedIn: 'root'
})
export class ProjectOfflineDbService {

  constructor() { }
 // --------------------
  // Project Methods
  // --------------------

  /**
   * ADD OR UPDATE PROJECT (UPSERT)
   * - If indexId exists → update
   * - If indexId does not exist → add
   */

 generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

async upsertProject(project: ProjectDetail): Promise<number> {
  let projectToSave: any = {
    ...project,
    projectUlId: project.projectUlId || this.generateId(),
    createdAt: project.indexId && project.indexId > 0 ? project.createdAt : new Date(),
  };

  // Include indexId only for updates
  if (project.indexId && project.indexId > 0) {
    projectToSave.indexId = project.indexId;
  }

  // Remove indexId if it's 0 or undefined for new inserts
  if (!project.indexId || project.indexId <= 0) {
    delete projectToSave.indexId;
  }

  const id = await db.projects.put(projectToSave);
  this.getAllProjects(); // For debugging
  return id;
}

  /**
   * GET ALL PROJECTS
   */
  getAllProjects(): Promise<ProjectDetail[]> {
    return db.projects.toArray();
  }

  /**
   * GET PROJECT BY indexId
   */
  getProjectById(indexId: number): Promise<ProjectDetail | undefined> {
    return db.projects.get(indexId);
  }

  deleteById(indexId: number): Promise<void> {
    return db.projects.delete(indexId);
  }
}
function ulid(): string {
  throw new Error('Function not implemented.');
}

