
const ImageShow = ({image}) => {
    return (
        <div>
            <img src={image.url.samll} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow