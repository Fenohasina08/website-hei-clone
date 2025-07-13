import photo1programmes from '/public/photo1programmes.webp'
import photo2programmes from '/photo2programmes.webp'
import photo3programmes from '/photo3programmes.webp'

const ProgrammesPhotos = () => {
    return (
         <div className="flex w-full h-[40vh] items-center justify-center mt-5 gap-9 mb-8">
                  <img
                    src={photo1programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />

                  <img
                    src={photo2programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />

                  <img
                    src={photo3programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />
                </div>
    )
}
export default ProgrammesPhotos