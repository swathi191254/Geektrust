import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
 import ReactPaginate from "react-paginate";

export default function List() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(list.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleDelete = (value) => {
    setList(
      list.filter((e) => {
        if (e.id !== value) return e;
      })
    );
  };
  const handleInput = (e) => {
    setForm(e.target.value);
  };
  console.log(list);
  const getData = async () => {
    let data = await axios(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    setList(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <Wrapper>
      <Nav>
        <input
          placeholder="search by name,email or role"
          onChange={handleInput}
        />
      </Nav>
      <Lists>
        <table style={{ width: "1000px", textAlign: "left" }}>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </table>
      </Lists>

      {list
        .filter((e) => {
          if (form === "") return e;
          else if (
            e.name.toLowerCase().includes(form.toLowerCase()) ||
            e.role.toLowerCase().includes(form.toLowerCase()) ||
            e.email.toLowerCase().includes(form.toLowerCase())
          ) {
            return e;
          }
        })
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((e) => (
          <Lists>
            <table style={{ width: "1000px", textAlign: "left" }}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>
                  <button onClick={() => handleDelete(e.id)}><img style={{width:'15px'}} src = 'data:image/png;base64,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'/></button>
                </td>
              </tr>
            </table>
          </Lists>
        ))}
      
       <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
      /> 
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  border: 1px solid;
  padding: 20px;
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1000px;
  td {
    width: 200px;
    padding: 8px;
  }
  th {
    width: 200px;
    padding: 8px;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  input {
    width: 1000px;
  }
`;