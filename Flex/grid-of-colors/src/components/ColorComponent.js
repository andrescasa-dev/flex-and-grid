export default function ColorComponent(color){
  console.log({...color})
  const {value, rows, columns} = color
  const wPercent = 1/columns * 100;
  const hPercent = 1/rows * 100;
  return `<div class="bg-[${value}] w-[${wPercent}%] h-[${hPercent}%] flex-auto"></div>`
}