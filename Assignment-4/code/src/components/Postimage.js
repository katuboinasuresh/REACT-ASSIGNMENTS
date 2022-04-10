const Postimage = ({ config }) => {
    return (
        <div className="Postimagewraper">
            <img src={`../assets/${config.PostImage}`} alt="photos"></img>
        </div>
    );
};
export default Postimage;
