export interface Notes {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNote {
  title: string;
  content: string;
}

export interface UpdateNote extends CreateNote {
  id: string;
}
