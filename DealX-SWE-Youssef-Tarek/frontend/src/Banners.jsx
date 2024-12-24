

const Banner = ({ backgroundImage, title, description, width = "100%", height = "300px" }) => {
    const bannerStyle = {
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        width: width,
        height: height,
    };

    return (
        <div className="banner" style={bannerStyle}>
            <div className="banner-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Banner;
