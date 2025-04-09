export type ITask = {
  id: string;
  title: string;
  description: string;
  createDate: string;
  completionDate: string | null;
  userId: number;
  isComplete: boolean;
};

export type IUser = {
  id: number;
  email: string;
  password: string;
  tasks: ITask[];
};
