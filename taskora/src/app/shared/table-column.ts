import { ColumnType } from "./column-type.enum";

export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left' | 'center';
  isEditable?: boolean;
  isSortable?: boolean;
  isShowable?: boolean;
  columnType?: ColumnType;
  isPrintable?: boolean;
}
