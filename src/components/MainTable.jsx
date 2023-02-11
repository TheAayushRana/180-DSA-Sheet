import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
} from "react-table";
import { useContext, useEffect, useMemo, useState } from "react";
import SearchQuestion from "./SearchQuestion";
import Checkbox from "./Checkbox";
import ManageContext from "./Context/ManageContext";

function MainTable({ content }) {
  const { darkMode } = useContext(ManageContext);
  const data = useMemo(() => content, []);
  const [solvedQuestion, setSolvedQuestion] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Question",
        accessor: "Question",
      },
      {
        Header: "Question Link",
        accessor: "Question_link",
        Cell: (props) => (
          <a href={props.value} target="_blank">
            Practice Link
          </a>
        ),
      },
      {
        Header: "Solution Link",
        accessor: "Solution_link",
        Cell: (props) => (
          <a href={props.value} target="_blank">
            Solution
          </a>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalfilter } = state;

  // Used to set in local storage
  useEffect(() => {
    const newarray =
      selectedFlatRows.map((row) => row.original).length > 0
        ? selectedFlatRows.map((row) => row.original)
        : solvedQuestion;
    setSolvedQuestion([...newarray]);
  }, [selectedFlatRows]);
  localStorage.setItem("solved", JSON.stringify(solvedQuestion));

  // Used to get from the local storage
  useEffect(() => {
    const arrayData = localStorage.getItem("solved");
    if (arrayData !== null) {
      setSolvedQuestion(JSON.parse(arrayData));
    }
  }, []);

  return (
    <>
      <SearchQuestion filter={globalfilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        style={{
          border: "solid 1px blue",
          textAlign: "center",
          margin: "auto",
          fontWeight: "bold",
        }}
        className="table table-bordered mb-5 w-75"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table-light">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    fontSize: "20px",
                    border: "solid 3px #47beb9",
                    color: `${darkMode ? "white" : "black"}`,
                    background: `${darkMode ? "black" : "#dce7ff"}`,
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ▲ "
                        : " ▼ "
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-light">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        fontWeight: "500",
                        padding: "10px",
                        border: `${
                          darkMode ? "solid 1px white" : "solid 1px black"
                        }`,
                        color: `${darkMode ? "white" : "black"}`,
                        background: `${darkMode ? "black" : "aliceblue"}`,
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MainTable;
