import { useState } from "react";
import Navbar from "./Page Component";

const App2 = (props) => {
  const [dataList] = useState(props.article);
  let first = true;
  return (
    <>
    <Navbar />
      <div className="wrapper">
        <center>
          <div className={"blogTitle"}>
            <h1>Blog Post Article</h1>
            <p>Placeholder text to explain something here</p>
          </div>
        </center>
        <div className={"gridDisplay"}>
          {dataList.map((data) => {
            if (first){
              first = false;
              return (
                <div key={data.title} className={"boxStyle-first longDisplay"}>
                  <p className={"titleFont-first"}>{data.title.toUpperCase()}</p>
                  <hr className={"spacing"} />
                  <p className={"articleFont-first"}>{data.body}</p>
                </div>
              )
            }
            else{
              return (
                <div key={data.title} className={"boxStyle"}>
                  <p className={"titleFont"}>{data.title.toUpperCase()}</p>
                  <hr className={"spacing"} />
                  <p className={"articleFont"}>{data.body}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default App2;
