export default function userComponent(user){
  const {name} = user
  return `
  <div class="flex p-1 border-b-[.001em] border-slate-500 items-center ">
    <div class="relative w-[2em] h-[2em] rounded-full bg-gray-400">
      <div class="absolute w-[1em] h-[1em] bottom-[-3px] right-[-5px] rounded-full bg-green-400 border-4 border-slate-600"></div>
    </div>
    <div class="flex items-center gap-4 p-4 ">
        <h3>${name}</h3>
    </div>
  </div>
  `
}