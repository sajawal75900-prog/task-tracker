import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ProjectDetail } from '../cores/models/project-detail.model';
import { ProjectOfflineDbService } from '../cores/offline-db/project-offline-db.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private projectOfflineDb: ProjectOfflineDbService) { }
  TableDetailForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      id: new UntypedFormControl(),
      companyId: new UntypedFormControl(),
      branchId: new UntypedFormControl(''),
      name: new UntypedFormControl('', [Validators.required]),
      floor: new UntypedFormControl(''),
      location: new UntypedFormControl(0.0),
      seatingCapacity: new UntypedFormControl(0.0, [Validators.required]),
      status: new UntypedFormControl(0.0, [Validators.required]),
      currentReservation: new UntypedFormControl(),
    });
  }

  async saveData(project: ProjectDetail) {
    await this.projectOfflineDb.upsertProject(project);
    // await this.loadTables(this.tableParams); // Refresh the table list after save!
  }

  async getAllOfflineProject(): Promise<ProjectDetail[]> {
    return this.projectOfflineDb.getAllProjects();
  }

  deleteTableById(indexId: number): Promise<void> {
    return this.projectOfflineDb.deleteById(indexId);
  }
}
