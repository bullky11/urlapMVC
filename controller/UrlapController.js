import UrlapModell from "../modell/UrlapModell.js";
import UrlapView from "../view/urlapView.js";
class UrlapContoller {
    constructor(){
        new UrlapView($(".urlap"));
    }
}
export default UrlapContoller;
