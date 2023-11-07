import { TypeRecurso } from "./typerecurso";
import { Useror } from "./useror";

export class Publication{
    idPublication:number=0;
    title:String="";
    datePublication:Date=new Date(Date.now());
    id_TypeRecurso:TypeRecurso=new TypeRecurso();
    idUser:Useror=new Useror();
}