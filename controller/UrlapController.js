import UrlapModell from "../modell/UrlapModell.js";
import UrlapView from "../view/urlapView.js";
class UrlapContoller {
    constructor(){
        console.log("controller")
        new UrlapView()
    }
}
export default UrlapContoller;
