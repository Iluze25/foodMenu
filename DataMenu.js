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

function generateToast() {
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
    Flavor.setAttribute("class", "NameList Flavor");
    Flavor.textContent = x.Flavor;
    document.getElementById("WarpMenu").appendChild(Flavor);

    // SELIMUT HIJAU
    const SelimutHijau = document.createElement("div");
    SelimutHijau.setAttribute("class", "NameList SelimutHijau");
    SelimutHijau.textContent = x.PriceSelimutHijau;
    document.getElementById("WarpMenu").appendChild(SelimutHijau);

    // WHEAT TOAST
    const WheatToast = document.createElement("div");
    WheatToast.setAttribute("class", "NameList WheatToast");
    WheatToast.textContent = x.PriceWheatToast;
    document.getElementById("WarpMenu").appendChild(WheatToast);

    //SPECIAL TOAST
    const SpecialToast = document.createElement("div");
    SpecialToast.setAttribute("class", "NameList SpecialToast");
    SpecialToast.textContent = x.PriceSpecialToast;
    document.getElementById("WarpMenu").appendChild(SpecialToast);
  }
  document.getElementById("generateToast").style.display = "none";
}
