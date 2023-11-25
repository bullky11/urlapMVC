import UrlapModell from "../modell/UrlapModell.js";
import UrlapView from "../view/urlapView.js";
class UrlapContoller {
    constructor(){
        new UrlapView($(".urlap"));
        $(window).on("ujAdatHozzaAdasa",(event)=>{
            console.log("Az űrlap adatait megkapja a kontroller")
            console.log(event.detail)
            //adatbázisba beilleszteni a kapott adatit
            //dataService.postAxios(apiVegpont,event.detail)
        })
        $(window).on("torol",()=>{
            //afatbázis tábla 1 sorának törlése 
            console.log("töröltem valamit")
        })
    }
}
export default UrlapContoller;
