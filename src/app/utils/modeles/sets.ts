export interface ImgI {
    created_at?:string;
    ext?:string;
    hash?:string;
    id?: number;
    mime?:string;
    name?:string;
    provider?:string;
    provider_metadata?:string;
    sha256?:string;
    size?:number;
    updated_at?:string;
    url:string;
}

export interface MenuI {
    id: number;
    titre: string;
    chemin: string;
    menu: string;
    icone: string;
    couleurGauche: CouleurI;
    couleurDroite: CouleurI;
    ordre?: number;
    type?: string;
    created_at?: string;
    updated_at?: string;
    medias?:Array<ImgI>;
}

export interface CouleurI {
    id?: number;
    nom: string;
    code: string;
    created_at?: string;
    updated_at?: string
}

// Création de classe pour l'instanciation
export class LMenus implements MenuI {
    id = 0;
    titre = '';
    chemin = '';
    menu = '';
    icone = '';
    ordre = 0;
    type = '';
    couleurGauche = { id: 0, nom: '', code: '' };
    couleurDroite = { id: 0, nom: '', code: '' };
    medias:[{url:''}];
}