import React, { useMemo } from "react";
import { useTable, useExpanded, useResizeColumns } from "react-table";
import styles from './StudentLife.module.css'


function StudentLife() {

    const columns = useMemo(
        () => [
          {
            Header: "Name",
            accessor: "col1", //key
            width: 50
          },
          {
            Header: "Category",
            accessor: "col2",
          },
          {
            Header: "Status",
            accessor: "col3",
          },
          {
            Header: "Action(s)",
            accessor: "col4",
          },
        ],
        []
      );

  const data = useMemo(
    () => [
      {
        col1: "Accounting",
        col2: "Academic",
        col3: "inactive",
        col4: "SEE",
      },
      {
        col1: "Aerobics & Fitness",
        col2: "Sport",
        col3: "inactive",
        col4: "SEE",
      },
      {
        col1: "Accounting",
        col2: "Academic",
        col3: "inactive",
        col4: "SEE",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    // apply the table props
    <div className={styles.container}>
      <table {...getTableProps()} className={styles.clubTable}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
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
    </div>
  );
}

export default StudentLife;
