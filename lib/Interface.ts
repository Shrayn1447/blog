export interface Post {
    post : {
     id: number;
     authorId: number;
     createdAt: Date;
     updatedAt: Date;
     text: string;
     title: string;
     img: string;
     published: boolean;
    },
  
 }