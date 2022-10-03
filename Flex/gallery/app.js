// import json
// const BASE_URL = 'https://picsum.photos'
const div_Photos = document.querySelector('#photos')
const div_selected = document.querySelector('#selected')

class app{
  constructor(){
    this.run();
    this.listeners();
  }
  async run(){
    this.photosData = await this.getImagesData();
    div_Photos.innerHTML = this.photosData.map(photoData => this.PhotoComponent(photoData,'100/100')).join('');
    div_selected.innerHTML = this.PhotoComponent(this.photosData[2],'300/300');
  }

  async getImagesData(){
    const response = await fetch('photo.json')
    return await response.json();
  }

  PhotoComponent(photo, size) {
    return `
    <img class="photo rounded-lg border border-4 border-white bg-red-400" data-id="${photo.id}" src="https://picsum.photos/id/${photo.id}/${size}" alt="${photo.title}">
    `
  }

  listeners(){
    document.addEventListener('click', (event)=>{
      const {target} = event
      if(target.matches('.photo')){    
        const photo = this.photosData.find(photo => photo.id === Number(target.dataset.id))
        div_selected.innerHTML = this.PhotoComponent(photo, '300/300');
      }
    })
  }
}

new app();




