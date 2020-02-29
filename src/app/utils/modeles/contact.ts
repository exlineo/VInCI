export interface ContactI {
    nom:string;
    mail:string;
    sujet:string;
    message:string;
}
export class Contact implements ContactI{
    nom = '';
    mail = '';
    sujet = '';
    message = '';
}