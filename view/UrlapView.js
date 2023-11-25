import TxtUrlapView from "./TxtUrlapView.js";
import { adatLeiras } from "./adat.js";
class UrlapView {
  #formAdat = {};
  #inputElemObjektumokListaja=[];// itt tároljuk azokat az objektumokat melyet létrehozzák a form elemeket

  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");
    console.log(this.formElem);

    this.htmlOsszeallit();
    /* A Submit gomb kezelése 4 lépés
    1.létrehozom a gombhoz a kapaszkodót
    2.hozzárendelem az eseményt
    3.ebbe naz eseményben összegyűjtöm a aform adatait 
    4.és felküldöm a controllernek*/

    this.submitElem = this.formElem.find("#submit");
    console.log(this.submitElem);
    this.nevElem = this.formElem.find("#nev");
    this.szulEveElem = this.formElem.find("#szul_ev");

    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#inputElemObjektumokListaja.forEach(
        (elem)=>{
          console.log(elem)
          this.#formAdat[elem.key]=elem.getValue();
        })
      

      this.#formAdat.nev = this.nevElem.val();
      this.#formAdat.szul = this.szulEveElem.val();
      console.log(this.#formAdat);
      this.trigger("ujAdatHozzaAdasa");
    });
  }
  trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
    window.dispatchEvent(e);
  }
  
  numberUrlapElem(obj, key) {
    let txt = `<div class="mb-3 mt-3">
      <label for="${key}" class="form-label">Név:${obj.megjelenes}</label>
      <input type="${obj.tipus}" class="form-control" 
      id="${key}"
      placeholder="${obj.placeholder}"
      min="${obj.pattern.min}"
      max="${obj.pattern.max}"
      value="${obj.value}"
      name="${key}"
      >
    </div>`;
    return txt;
  }
  htmlOsszeallit() {
    let txt = "";
    for (const key in adatLeiras) {
      switch (adatLeiras[key].tipus) {
        case "text":
          this.#inputElemObjektumokListaja.push(new TxtUrlapView(this.formElem,adatLeiras[key],key))
          break;
        case "number":
          txt += this.numberUrlapElem(adatLeiras[key],key);
          break;
        default:
          break;
      }
    }
    txt += `
    <input type="submit" 
    id="submit"  
    value="Küld">
  
   `;
    this.formElem.append(txt);
  }
}
export default UrlapView;
