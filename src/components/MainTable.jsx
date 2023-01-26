import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { useMemo } from "react";
import SearchQuestion from "./SearchQuestion";

function MainTable({ content }) {
  console.log(content);
  const data = useMemo(() => content, []);

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
      },
      {
        Header: "Solution Link",
        accessor: "Solution_link",
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
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalfilter } = state;

  return (
    <>
      <SearchQuestion filter={globalfilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        style={{
          border: "solid 1px blue",
          textAlign: "center",
          margin: "auto",
        }}
        className="table table-bordered mb-5"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table-light">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
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
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
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
