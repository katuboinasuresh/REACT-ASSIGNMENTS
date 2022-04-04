function Information(propse) {
    const { object } = propse
    return (
        <div className="Information">
            <div class="p1">Appointment: <span>{object.Appointment}</span></div>
            <div class="p1">Email: <span>{object.Email}</span></div>
            <div class="p1">Phone: <span>{object.Phone}</span></div>
        </div>
    );
}
export default Information;