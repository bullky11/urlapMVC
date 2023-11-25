export const adatLeiras={
    nev:{
        megjelenes:"Név",
        tipus:"txt",
        placeholder:"valaki Vagyok",
        pattern:"[A-z][a-z]{3}",
        szoveg:"Leaglább 3 betű,nagy betűvel kell kezdődnie",
        required:true

    },
    szul:{
        megjelenes:"Szuletési idő",
        tipus:"number",
        value:"2000",
        pattern:{min:"1000",max:"2023"},
        szoveg:"1000 és 2023 közötti számot adhat meg"

    }

}
export const adatLeiras2={
    nev:"Név",
    szul:"születési idő"
}