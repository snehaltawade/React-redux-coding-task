import './App.css';
import TableComponent from './components/TableComponent';
import UserRegistrationForm from './components/UserRegistrationForm';

function App() {
  const data = [
    {
      id: "1",
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421",
    },
    {
      id: "2",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
  ];
   
const columns = [
    // { data: "name", title: "Name" },
    // { data: "age", title: "Age" },
    // { data: "sex", title: "Sex" },
    // {data:'mobile',title:'Mobile no'},
    // {data:'idType',title:'Gov Id type'}
    { data: "id", title: "Name" },
    { data: "name", title: "Age" },
    { data: "position", title: "Sex" },
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
