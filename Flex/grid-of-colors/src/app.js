import ColorComponent from "./components/ColorComponent.js";
import { HEX_API_BASE_URL } from "./utils/constants.js";
import { div_pallet, input_columns, input_rows, value_columns, value_rows } from "./view.js";


async function showPalletColors(dimensionsString){
  const [columns, rows] = dimensionsString.split('x')
  const totalOfColors = columns * rows;
  console.log({totalOfColors, columns, rows})
  const colors = await getColors(totalOfColors);
  const colorsHtml = colors.map(color => ColorComponent({
    ...color,
    columns,
    rows
  })).join('');
  div_pallet.innerHTML = colorsHtml;
}

async function getColors(quantity){
  const response = await fetch(`${HEX_API_BASE_URL}/?count=${quantity}`)
  const data = await response.json();
  return data.colors;
}

document.addEventListener('input', async (event)=>{
  value_columns.innerHTML = input_columns.value
  value_rows.innerHTML = input_rows.value
  await showPalletColors(`${input_columns.value}x${input_rows.value}`)
})

showPalletColors('2x2')

