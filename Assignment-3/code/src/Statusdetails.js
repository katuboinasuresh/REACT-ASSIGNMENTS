function Statusdetails(propse) {
    const { object } = propse
    return (
        <div className="Statusdetails">
            <div class="s1">status<br></br><div class="update"></div><span >{object.status}</span></div>
            <div class="s1">Door<br></br><span>{object.Door}</span></div>
            <div class="s1">Time<br></br><span>{object.Time}</span></div>
        </div>
    );
}
export default Statusdetails;