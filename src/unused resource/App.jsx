import Identity from "./Identity";

const App = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>Arya Sena Aji</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>Medan</td>
          </tr>
          <tr>
            <td>Pekerjaan</td>
            <td>:</td>
            <td>Accounting</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>aryasa1997@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <br />
      <Identity />
    </>
  );
};

export default App;
