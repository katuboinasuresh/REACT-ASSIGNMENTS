import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
      <img src={employee.profileImg}  alt="my-id"></img>
      <h1 class="name">{employee.name}</h1>
      <div class= "details">
        <div class="p1">Location</div>
        <div class="j1">{employee.location}</div>
      </div>
      <div class="details">
        <div class="p1">Blod group</div>
        <div class="j1">{employee.bloodGroup}</div>
      </div>
      <div class="details">
        <div class="p1">Age</div>
        <div class="j1">{employee.age}</div>
      </div>

  
</div>
)
}



export default App;
