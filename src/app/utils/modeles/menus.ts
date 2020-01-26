export interface ListeMenuI {
    logo: ImgI;
    principal: Array<ItemMenusI>;
    pied: Array<ItemMenusI>;
}

export interface ItemMenusI {
    t: string;
    a: string;
    l: string;
    i?: string;
    g?: string;
    d?: string;
}

export interface ImgI {
    t: string;
    l: string;
    d?: string;
}
export interface MenuI {
    id: number;
    titre: string;
    chemin: string;
    menu: string;
    icone: string;
    couleurGauche: CouleurI;
    couleurDroite: CouleurI;
    created_at?: string;
    updated_at?: string;
}
export interface CouleurI {
    id?: number;
    nom: string;
    code: string;
    created_at?: string;
    updated_at?: string
}
export class LMenus implements MenuI{
    id = 1;
    titre = '';
    chemin =  '';
    menu =  '';
    icone =  '';
    couleurGauche = {id:0, nom:'', code:''};
    couleurDroite = {id:0, nom:'', code:''};
}
export class ItemMenu implements ItemMenusI {
    t = '';
    a = '';
    l = '';
    i = '';
    g = '';
    d = '';
}
export class Menus implements ListeMenuI {
    logo = { t: '', l: '', d: '' };
    principal = [new ItemMenu()];
    pied = [new ItemMenu()];
}