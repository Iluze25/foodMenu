function ToastSeriesFunctObj(
  Flavor,
  PriceSelimutHijau,
  PriceWheatToast,
  PriceSpecialToast
) {
  this.Flavor = Flavor;
  this.PriceSelimutHijau = PriceSelimutHijau;
  this.PriceWheatToast = PriceWheatToast;
  this.PriceSpecialToast = PriceSpecialToast;
}

const ChocoMilk = new ToastSeriesFunctObj("Choco Milk", "18k", "13k", "12k");
const Taro = new ToastSeriesFunctObj("Taro", "18k", "14k", "13k");
const GreenTea = new ToastSeriesFunctObj("Green Tea", "18k", "14k", "13k");
const CheeseMilk = new ToastSeriesFunctObj("Cheese Milk", "18k", "15k", "14k");
const RainbowBlueberry = new ToastSeriesFunctObj(
  "Rainbow Blueberry",
  "18k",
  "16k",
  "15k"
);
const SpecialChoco = new ToastSeriesFunctObj(
  "Special Choco",
  "20k",
  "16k",
  "15k"
);
const ChocoCheese = new ToastSeriesFunctObj(
  "Choco Cheese",
  "20k",
  "18k",
  "17k"
);
const SpecialCheese = new ToastSeriesFunctObj(
  "Special Cheese",
  "20k",
  "18k",
  "17k"
);
const DurianOriginal = new ToastSeriesFunctObj(
  "Durian Original",
  "30k",
  "26k",
  "25k"
);

const ToastSeriesArray = [
  ChocoMilk,
  Taro,
  GreenTea,
  CheeseMilk,
  RainbowBlueberry,
  SpecialChoco,
  ChocoCheese,
  SpecialCheese,
  DurianOriginal,
];

// Membuat warp untuk Toast series
const container = document.getElementById("container");
const ToastSeriess = document.createElement("div");
ToastSeriess.setAttribute("id", "ToastSeries");
ToastSeriess.textContent = "TOAST SERIES";
container.appendChild(ToastSeriess);

// Membuat Warp Untuk List name
const WarpToastSeries = document.createElement("div");
WarpToastSeries.setAttribute("id", "WarpMenu");
document.getElementById("ToastSeries").appendChild(WarpToastSeries);

// Child Toast Series Flavor, Selimut Hijau, Wheat Toast, Special Toast
// FLAVOR
const ToastSeriesFlavor = document.createElement("div");
ToastSeriesFlavor.setAttribute("class", "HeaderMenu");
ToastSeriesFlavor.textContent = "FLAVOR";
document.getElementById("WarpMenu").appendChild(ToastSeriesFlavor);

// Selimut Hijau
const ToastSeriesSelimutHijau = document.createElement("div");
ToastSeriesSelimutHijau.setAttribute("class", "HeaderMenu");
ToastSeriesSelimutHijau.textContent = "SELIMUT HIJAU";
document.getElementById("WarpMenu").appendChild(ToastSeriesSelimutHijau);

// WHEAT TOAST
const ToastSeriesWheatToast = document.createElement("div");
ToastSeriesWheatToast.setAttribute("class", "HeaderMenu");
ToastSeriesWheatToast.textContent = "WHEAT TOAST";
document.getElementById("WarpMenu").appendChild(ToastSeriesWheatToast);

// SPECIAL TOAST
const ToastSeriesSpecialToast = document.createElement("div");
ToastSeriesSpecialToast.setAttribute("class", "HeaderMenu");
ToastSeriesSpecialToast.textContent = "SPECIAL TOAST";
document.getElementById("WarpMenu").appendChild(ToastSeriesSpecialToast);

// Child Name List
for (x of ToastSeriesArray) {
  // Flavor
  const Flavor = document.createElement("div");
  Flavor.setAttribute("class", "NameList ToastSeriesFlavor");
  Flavor.textContent = x.Flavor;
  document.getElementById("WarpMenu").appendChild(Flavor);

  // SELIMUT HIJAU
  const SelimutHijau = document.createElement("div");
  SelimutHijau.setAttribute("class", "NameList ToastSeriesSelimutHijau");
  SelimutHijau.textContent = x.PriceSelimutHijau;
  document.getElementById("WarpMenu").appendChild(SelimutHijau);

  // WHEAT TOAST
  const WheatToast = document.createElement("div");
  WheatToast.setAttribute("class", "NameList ToastSeriesWheatToast");
  WheatToast.textContent = x.PriceWheatToast;
  document.getElementById("WarpMenu").appendChild(WheatToast);

  //SPECIAL TOAST
  const SpecialToast = document.createElement("div");
  SpecialToast.setAttribute("class", "NameList ToastSeriesSpecialToast");
  SpecialToast.textContent = x.PriceSpecialToast;
  document.getElementById("WarpMenu").appendChild(SpecialToast);
}

// Toast Series----------------------------------------------------------------------------------------------------------------------------------

// BREAD ----------------------------------------------------------------------------------------------------------------------------------------
// Function BREAD untuk Object constructor
function BreadFunctObj(MilkBun, xPcs, xxxxPcs) {
  this.MilkBun = MilkBun;
  this.xPcs = xPcs;
  this.xxxxPcs = xxxxPcs;
}

// Object Bread
const BreadOriginal = new BreadFunctObj("Original", "8k", "30k");
const BreadStrawberry = new BreadFunctObj("Strawberry", "8k", "30k");
const BreadCoklat = new BreadFunctObj("Coklat", "8k", "30k");
const BreadTaro = new BreadFunctObj("Taro", "8k", "30k");
const BreadGreenTea = new BreadFunctObj("Grean Tea", "8k", "30k");

// Array Bread
const BreadArray = [
  BreadOriginal,
  BreadStrawberry,
  BreadCoklat,
  BreadTaro,
  BreadGreenTea,
];

// Container data Bread
const BREAD = document.createElement("div");
BREAD.setAttribute("id", "BREAD");
BREAD.textContent = "BREAD";
container.appendChild(BREAD);

// Header Bread Data : MILK BUN, 1PCS,  4PCS
const BreadMilkBun = document.createElement("div");
BreadMilkBun.setAttribute("class", "HeaderMenu");
BreadMilkBun.textContent = "MILK BUN";
document.getElementById("BREAD").appendChild(BreadMilkBun);

const Bread1Pcs = document.createElement("div");
Bread1Pcs.setAttribute("class", "HeaderMenu");
Bread1Pcs.textContent = "1 PCS";
document.getElementById("BREAD").appendChild(Bread1Pcs);

const Bread4Pcs = document.createElement("div");
Bread4Pcs.setAttribute("class", "HeaderMenu");
Bread4Pcs.textContent = "4 PCS";
document.getElementById("BREAD").appendChild(Bread4Pcs);

// List data Menu Food : Original, Strawberry, coklat, Taro, Green Tea
for (let valuesBread of BreadArray) {
  // MILK BUN
  const MilkBun = document.createElement("div");
  MilkBun.setAttribute("class", "NameList BreadMilkBun");
  MilkBun.textContent = valuesBread.MilkBun;
  document.getElementById("BREAD").appendChild(MilkBun);

  // 1 PCS
  const xPcs = document.createElement("div");
  xPcs.setAttribute("class", "NameList Bread1Pcs");
  xPcs.textContent = valuesBread.xPcs;
  document.getElementById("BREAD").appendChild(xPcs);

  // 4 PCS
  const xxxxPcs = document.createElement("div");
  xxxxPcs.setAttribute("class", "NameList Bread4Pcs");
  xxxxPcs.textContent = valuesBread.xxxxPcs;
  document.getElementById("BREAD").appendChild(xxxxPcs);
}
// BREAD--------------------------------------------------------------------------

// NOODLE-------------------------------------------------------------------------
// NOODLE original
const NoodleArrayObj = [
  { Name: "Mie Goreng", Price: "8k" },
  { Name: "Mie Rendang", Price: "8k" },
  { Name: "Mie Kari", Price: "8k" },
  { Name: "Mie Soto", Price: "8k" },
  { Name: "Mie Sambal Matha", Price: "8k" },
];

// NOODLE Addition
const NoodleAdditionArrayObj = [
  { Name: "Telor", Price: "+5k" },
  { Name: "Double Mie", Price: "+6k" },
  { Name: "Sayur Caisim", Price: "+2k" },
  { Name: "Sosis", Price: "+4k" },
];

// Warp NOODLE data
const NOODLE = document.createElement("div");
NOODLE.setAttribute("id", "NOODLE");
NOODLE.textContent = "NOODLE";
container.appendChild(NOODLE);

// Menambahkan list
const jmlNoodleAryObj = NoodleArrayObj.length;
const NoodleContainer = document.getElementById("NOODLE");
for (
  let valuesNoodlesName = 0;
  valuesNoodlesName < jmlNoodleAryObj;
  valuesNoodlesName++
) {
  const NoodleListName = document.createElement("div");
  NoodleListName.setAttribute("class", "NameList NameListNoodle");
  NoodleListName.setAttribute("id", `NoodleNameList${valuesNoodlesName}`);
  NoodleListName.style.width = "fit-content";
  NoodleListName.textContent = NoodleArrayObj[valuesNoodlesName].Name;
  NoodleContainer.appendChild(NoodleListName);
}
// Menambahkan dots

// Menambahkan List Harga
for (
  let valuesNoodlesPrice = 0;
  valuesNoodlesPrice < NoodleArrayObj.length;
  valuesNoodlesPrice++
) {
  document.getElementById(`NoodleNameList${valuesNoodlesPrice}`).innerHTML +=
    NoodleArrayObj[valuesNoodlesPrice].Price;
}

function noodlesDot() {
  for (
    let valuesNoodleDots = 0;
    valuesNoodleDots < NoodleArrayObj.length;
    valuesNoodleDots++
  ) {
    document.getElementById(`NoodleNameList${valuesNoodleDots}`).innerHTML =
      NoodleArrayObj[valuesNoodleDots].Name +
      NoodleArrayObj[valuesNoodleDots].Price;
    const NoodleNameListTextDefault = document.getElementById(
      `NoodleNameList${valuesNoodleDots}`
    ).innerText;
    do {
      document.getElementById(`NoodleNameList${valuesNoodleDots}`).innerHTML +=
        ".";
    } while (
      document.getElementById(`NoodleNameList${valuesNoodleDots}`).offsetWidth <
      document.getElementById("NOODLE").offsetWidth
    );
    if (
      document.getElementById(`NoodleNameList${valuesNoodleDots}`)
        .offsetWidth >= document.getElementById("NOODLE").offsetWidth
    ) {
      const noodlesListNamedots = document.getElementById(
        `NoodleNameList${valuesNoodleDots}`
      ).innerText;
      document.getElementById(`NoodleNameList${valuesNoodleDots}`).innerText =
        noodlesListNamedots.substring(0, noodlesListNamedots.length - 1);
    }
    // ------------------------------------------------------------------------------------------------------------BELUM SELESAI MODE PENEGRJAAN
    let dotsTrimTextNoodle = document.getElementById(
      `NoodleNameList${valuesNoodleDots}`
    );
    dotsTrimTextNoodle = dotsTrimTextNoodle.innerText.substring(
      NoodleNameListTextDefault.length,
      dotsTrimTextNoodle.innerText.length
    );
    const returnNoodleLisrName = document.getElementById(
      `NoodleNameList${valuesNoodleDots}`
    ).innerText;
    returnNoodleLisrName = returnNoodleLisrName.substring();
    // BELUM SELESAI MODE PENEGRJAAN------------------------------------------------------------------------------------------------------------
  }
}

window.addEventListener("resize", noodlesDot);
noodlesDot();
