function Header(propse) {
    const { object } = propse
    return (
        <div className="Header">
            <div className="header">
                <div className="icon">{object.arrow}</div>
                <div className="name"><b>{object.name}</b><br></br>
                    <span>{object.EmployeeID}</span></div>
                <button className="btn">Print</button>
            </div>

        </div>
    );
}

export default Header;
