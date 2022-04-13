function Identity(propse) {
    const { object } = propse
    return (
        <div className="Identity">
            <div className="square"></div><span><img src="https://www.w3schools.com/howto/img_avatar.png" alt="id"></img></span>
            <div className="i"><b>{object.data}</b><br></br><span>these is react assignment-3</span></div>
            <div className="arro">{object.arrow2}</div>
        </div>
    );
}
export default Identity;