import images from './images'

function Gallery() {
  return (
    <div className='gallery'>
      {images.map((img, id) => <img key={img+id} src={img} alt='' />)}
    </div>
  )
}

export default Gallery
