import React from "react";
import MaterialTable from "material-table";
import styles from "./StudentLife.module.css";

function ClubTable() {
  const [selectedRow, setSelectedRow] = React.useState(null);

  const data = [
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <i
              style={{
                paddingRight: "5px",
                color: "rgba(187,29,34,1)",
                fontSize: "1.1rem",
              }}
              className="fas fa-calculator"
            ></i>
          </span>
          {"Accounting"} 
        </div>
      ),
      cat: "Studies",
      stat: "active",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-horse"
              ></i>
            </span>
          </span>
          {<span>Animation</span>}
        </div>
      ),
      cat: "Practical",
      stat: "active",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-laptop"
              ></i>
            </span>
          </span>
          Computer Science
        </div>
      ),
      cat: "Studies",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-pen"
              ></i>
            </span>
          </span>
          Poetry
        </div>
      ),
      cat: "Spirit",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-tree"
              ></i>
            </span>
          </span>
          Woodwork
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-water"
              ></i>
            </span>
          </span>
          Swimming
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-walking"
              ></i>
            </span>
          </span>
          Hiking
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-hammer"
              ></i>
            </span>
          </span>
          Smithing
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-music"
              ></i>
            </span>
          </span>
          Music
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-beer"
              ></i>
            </span>
          </span>
          Drinking
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-hammer"
              ></i>
            </span>
          </span>
          Smithing
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-hammer"
              ></i>
            </span>
          </span>
          Smithing
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
    {
      name: (
        <div style={{ display: "flex", justifyContent: "initial" }}>
          <span style={{ width: "30px" }}>
            <span style={{ width: "30px" }}>
              <i
                style={{
                  paddingRight: "5px",
                  color: "rgba(187,29,34,1)",
                  fontSize: "1.1rem",
                }}
                className="fas fa-hammer"
              ></i>
            </span>
          </span>
          Smithing
        </div>
      ),
      cat: "Extracurricular",
      stat: "inactive",
      act: (
        <span
          style={{
            cursor: "pointer",
            borderRadius: "3px",
            padding: "4px 10px",
            backgroundColor: "rgba(187,29,34,1)",
            height: "10px",
            width: "10px",
          }}
        >
          <i
            style={{ color: "#FFF", fontSize: "1.1rem" }}
            className="fas fa-eye"
          ></i>
        </span>
      ),
    },
  ];

  const columns = [
    {
      title: "Name",
      field: "name",
      cellStyle: {
        width: 800,
      },
    },
    {
      title: "Category",
      field: "cat",
    },
    {
      title: "Status",
      field: "stat",
    },
    {
      title: "Action(s)",
      field: "act",
    },
  ];

  return (
    <div>
      <div>
        <h1 style={{ display: "flex", alignItems: "center", justifyContent: "initial"  }}>
            <span>
            <i
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "1.7rem",
              color: "#575962",
            }}
            className="fas fa-snowboarding"
          ></i>
            </span>
          Clubs
          <i
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "1.1rem",
              color: "#bb1d2c",
            }}
            className="fas fa-question-circle"
          ></i>
        </h1>
      </div>
      <div id={styles.clubTable}>
        <MaterialTable
          title={false}
          options={{
            search: true,
            toolbar: true,
            headerStyle: {
              borderTop: "1px solid #F4f5f8",
              borderBottom: "4px solid #F4f5f8",
            },
            searchFieldVariant: "outlined",
            searchFieldStyle: {
              height: "40px",
              marginRight: "10px",
            },
          }}
          data={data}
          columns={columns}
          onRowClick={(evt, selectedRow) =>
            setSelectedRow(selectedRow.tableData.id)
          }
        />
      </div>
    </div>
  );
}

export default ClubTable;
