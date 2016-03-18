export interface TodoAttachment {
  name: string;
  progress: number;
}

export interface Todo {
  title: string;
  dueDate: string;
  attachments: Array<TodoAttachment>;
}
