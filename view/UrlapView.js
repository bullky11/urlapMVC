class UrlapView {
  #formAdat={

  }
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

    this.submitElem=this.formElem.find("#submit");
    console.log(this.submitElem)
    this.nevElem=this.formElem.find("#nev");
    this.szulEveElem=this.formElem.find("#szul_ev");
    this.submitElem.on("click",(event)=>{
      event.preventDefault();
      this.#formAdat.nev=this.nevElem.val();
      this.#formAdat.szul=this.szulEveElem.val();
      console.log(this.#formAdat);
      this.trigger("ujAdatHozzaAdasa");
      this.trigger("torol");
    })
  }
  trigger(esemenyNev){
    const e=new CustomEvent(esemenyNev,{detail:this.#formAdat})
    window.dispatchEvent(e);
  
    }


  htmlOsszeallit() {
    let txt = "";
    txt += `<div class="mb-3 mt-3">
        <label for="nev" class="form-label">Név:</label>
        <input type="text" class="form-control" id="nev" 
        placeholder="Kiss Géza"
        pattern="[A-Z][a-z]{3}"
        name="nev">
      </div>`;
      txt += `<div class="mb-3 mt-3">
      <label for="szul_ev" class="form-label">Születési Év::</label>
      <input type="number" class="form-control" id="szul_ev" 
      value="1975" 
      min="1000" 
      max="2050" 
      name="szul_ev">
    </div>`;
    txt+=`
    <input type="submit" 
    id="submit"  
    value="Küld">
  
   `;
    this.formElem.append(txt);
  }
}
export default UrlapView;
