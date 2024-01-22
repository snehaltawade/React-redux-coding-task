import './App.css';
import TableComponent from './components/TableComponent';
import UserRegistrationForm from './components/UserRegistrationForm';

function App() {
  const data = [
    {
      name: "snehal",
      age: "24",
      sex: "Female",
      mobile: "8983898389",
      idType: "adhar",
      gov_id: "741258963",
      country: "India",
      state: "Maharashtra",
      city: "pune",
      pincode: "411045",
      address: "pune",
    },
    {
      name: "deepak",
      age: "25",
      sex: "Male",
      mobile: "7878787878",
      idType: "pan",
      gov_id: "ASDCF7845P",
      country: "India",
      state: "Maharashtra",
      city: "Pune",
      pincode: "417852",
      address: "pune",
    },
  ];
   
const columns = [
    { data: "name", title: "Name" },
    { data: "age", title: "Age" },
    { data: "sex", title: "Sex" },
    {data:'mobile',title:'Mobile no'},
    {data:'idType',title:'Gov Id type'},
    { data: "gov_id", title: "Gov id" },
    { data: "country", title: "country" },
    { data: "state", title: "State" },
    { data: "city", title: "City" },
    { data: "pincode", title: "Pincode" },
    { data: "address", title: "Address" },
  ];
  const UserTable = () => {
    return <TableComponent data={data} columns={columns} />;
  };
  return (
    <div className="App">
      <UserRegistrationForm/>
      <UserTable/>
    </div>
  );
}

export default App;