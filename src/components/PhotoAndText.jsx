export const PhotoAndText = ({title, text, imagePath, left}) => {
    return (
        <div className={`photo-and-text-container ${left ? "pat-reverse" : ""}`}>
            <div className="image-container">
                <img src={imagePath}></img>
            </div>
            <div>
                <h2>{title}</h2>
                <div className="service-box-text">{text}</div>
            </div>
        </div>
    )
}