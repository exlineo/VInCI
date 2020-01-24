export interface ListeMenu {
    logo:Img;
    principal:Array<ItemMenus>;
    pied:Array<ItemMenus>;
}

export interface ItemMenus{
    t:string;
    l:string;
    i?:string;
    g?:string;
    d?:string;
}

export interface Img{
    t:string;
    l:string;
    d?:string;
}