export interface ArticleThumbnail{
    category:string;
    title:string;
    imageName:string;
}

export interface Article{
    id:string;
    title:string;
    createdAt:string;
    createdBy:string;
    category:string;
    modifiedAt:string;
    description:ArticleParagraph[];
}

export interface ArticleParagraph{
    content:string;
    imageName:string|null;
}