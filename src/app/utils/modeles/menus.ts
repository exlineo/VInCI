export interface ListeMenuI {
    logo:ImgI;
    principal:Array<ItemMenusI>;
    pied:Array<ItemMenusI>;
}

export interface ItemMenusI{
    t:string;
    a:string;
    l:string;
    i?:string;
    g?:string;
    d?:string;
}

export interface ImgI{
    t:string;
    l:string;
    d?:string;
}
export class ItemMenu implements ItemMenusI{
    t = '';
    a = '';
    l = '';
    i = '';
    g = '';
    d = '';
}
export class Menus implements ListeMenuI{
    logo = {t:'',l:'', d:''};
    principal = [new ItemMenu()];
    pied = [new ItemMenu()];
}