import { FilterType } from "./filter-type.enum";

export interface TableFilter {
  name: string;
  filterKey: string;
  filterValue?: any;
  filterType: FilterType;
  maxLimit?: number;
  position?: 'right' | 'left';
}
