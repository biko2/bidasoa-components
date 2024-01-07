export interface Entity {
  id: string;
  langcode: { value: string };
  type: string;
  [key: string]: any;
}
