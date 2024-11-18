import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

interface RowData {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
  occupation: string;
  city: string;
  status: string;
}
const rows: RowData[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    occupation: "Ranger",
    city: "Winterfell",
    status: "Active",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    occupation: "Queen",
    city: "King's Landing",
    status: "Deceased",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    occupation: "Knight",
    city: "King's Landing",
    status: "Deceased",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    occupation: "Assassin",
    city: "Winterfell",
    status: "Active",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    occupation: "Queen",
    city: "Dragonstone",
    status: "Deceased",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Krishna",
    age: 150,
    occupation: "Priestess",
    city: "Asshai",
    status: "Deceased",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    occupation: "Merchant",
    city: "Braavos",
    status: "Active",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    occupation: "Scholar",
    city: "Oldtown",
    status: "Active",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    occupation: "Alchemist",
    city: "Qarth",
    status: "Retired",
  },
  {
    id: 10,
    lastName: "Tyrell",
    firstName: "Margaery",
    age: 25,
    occupation: "Queen",
    city: "Highgarden",
    status: "Deceased",
  },
  {
    id: 11,
    lastName: "Greyjoy",
    firstName: "Theon",
    age: 31,
    occupation: "Prince",
    city: "Pyke",
    status: "Deceased",
  },
  {
    id: 12,
    lastName: "Baratheon",
    firstName: "Stannis",
    age: 45,
    occupation: "King",
    city: "Dragonstone",
    status: "Deceased",
  },
  {
    id: 13,
    lastName: "Tarly",
    firstName: "Samwell",
    age: 28,
    occupation: "Maester",
    city: "Oldtown",
    status: "Active",
  },
  {
    id: 14,
    lastName: "Sand",
    firstName: "Oberyn",
    age: 42,
    occupation: "Prince",
    city: "Dorne",
    status: "Deceased",
  },
  {
    id: 15,
    lastName: "Mormont",
    firstName: "Jorah",
    age: 50,
    occupation: "Knight",
    city: "Bear Island",
    status: "Deceased",
  },
  {
    id: 16,
    lastName: "Stark",
    firstName: "Sansa",
    age: 23,
    occupation: "Queen",
    city: "Winterfell",
    status: "Active",
  },
  {
    id: 17,
    lastName: "Bolton",
    firstName: "Ramsay",
    age: 35,
    occupation: "Lord",
    city: "Dreadfort",
    status: "Deceased",
  },
  {
    id: 18,
    lastName: "Tully",
    firstName: "Edmure",
    age: 48,
    occupation: "Lord",
    city: "Riverrun",
    status: "Active",
  },
  {
    id: 19,
    lastName: "Frey",
    firstName: "Walder",
    age: 90,
    occupation: "Lord",
    city: "The Twins",
    status: "Deceased",
  },
  {
    id: 20,
    lastName: "Martell",
    firstName: "Ellaria",
    age: 39,
    occupation: "Princess",
    city: "Dorne",
    status: "Deceased",
  },
  {
    id: 21,
    lastName: "Baelish",
    firstName: "Petyr",
    age: 45,
    occupation: "Master of Coin",
    city: "King's Landing",
    status: "Deceased",
  },
  {
    id: 22,
    lastName: "Clegane",
    firstName: "Sandor",
    age: 38,
    occupation: "Warrior",
    city: "The Riverlands",
    status: "Active",
  },
  {
    id: 23,
    lastName: "Clegane",
    firstName: "Gregor",
    age: 40,
    occupation: "Knight",
    city: "King's Landing",
    status: "Deceased",
  },
  {
    id: 24,
    lastName: "Karstark",
    firstName: "Rickard",
    age: 55,
    occupation: "Lord",
    city: "Karhold",
    status: "Deceased",
  },
  {
    id: 25,
    lastName: "Seaworth",
    firstName: "Davos",
    age: 48,
    occupation: "Hand of the King",
    city: "Dragonstone",
    status: "Active",
  },
  {
    id: 26,
    lastName: "Stark",
    firstName: "Bran",
    age: 18,
    occupation: "King",
    city: "King's Landing",
    status: "Active",
  },
  {
    id: 27,
    lastName: "Arryn",
    firstName: "Robin",
    age: 21,
    occupation: "Lord",
    city: "The Eyrie",
    status: "Active",
  },
  {
    id: 28,
    lastName: "Reed",
    firstName: "Meera",
    age: 25,
    occupation: "Scout",
    city: "Greywater Watch",
    status: "Active",
  },
  {
    id: 29,
    lastName: "Targaryen",
    firstName: "Aegon",
    age: 28,
    occupation: "King",
    city: "King's Landing",
    status: "Deceased",
  },
  {
    id: 30,
    lastName: "Dayne",
    firstName: "Arthur",
    age: 37,
    occupation: "Knight",
    city: "Starfall",
    status: "Deceased",
  },
  {
    id: 31,
    lastName: "Hightower",
    firstName: "Otto",
    age: 58,
    occupation: "Hand of the King",
    city: "Oldtown",
    status: "Active",
  },
  {
    id: 32,
    lastName: "Strong",
    firstName: "Harwin",
    age: 34,
    occupation: "Commander",
    city: "Harrenhal",
    status: "Deceased",
  },
  {
    id: 33,
    lastName: "Velaryon",
    firstName: "Corlys",
    age: 62,
    occupation: "Admiral",
    city: "Driftmark",
    status: "Active",
  },
  {
    id: 34,
    lastName: "Velaryon",
    firstName: "Laenor",
    age: 25,
    occupation: "Warrior",
    city: "Driftmark",
    status: "Deceased",
  },
  {
    id: 35,
    lastName: "Cole",
    firstName: "Criston",
    age: 33,
    occupation: "Lord Commander",
    city: "King's Landing",
    status: "Active",
  },
  {
    id: 36,
    lastName: "Stark",
    firstName: "Rickon",
    age: 12,
    occupation: "Prince",
    city: "Winterfell",
    status: "Deceased",
  },
  {
    id: 37,
    lastName: "Tarth",
    firstName: "Brienne",
    age: 35,
    occupation: "Commander",
    city: "Tarth",
    status: "Active",
  },
  {
    id: 38,
    lastName: "Royce",
    firstName: "Yohn",
    age: 50,
    occupation: "Lord",
    city: "Runestone",
    status: "Active",
  },
  {
    id: 39,
    lastName: "Greyjoy",
    firstName: "Euron",
    age: 42,
    occupation: "King",
    city: "Pyke",
    status: "Deceased",
  },
  {
    id: 40,
    lastName: "Hodor",
    firstName: "Wylis",
    age: 40,
    occupation: "Servant",
    city: "Winterfell",
    status: "Deceased",
  },
  {
    id: 41,
    lastName: "Glover",
    firstName: "Robett",
    age: 45,
    occupation: "Lord",
    city: "Deepwood Motte",
    status: "Active",
  },
  {
    id: 42,
    lastName: "Florent",
    firstName: "Axell",
    age: 50,
    occupation: "Lord",
    city: "Brightwater Keep",
    status: "Deceased",
  },
  {
    id: 43,
    lastName: "Tyrell",
    firstName: "Olenna",
    age: 72,
    occupation: "Matriarch",
    city: "Highgarden",
    status: "Deceased",
  },
  {
    id: 44,
    lastName: "Manderly",
    firstName: "Wyman",
    age: 60,
    occupation: "Lord",
    city: "White Harbor",
    status: "Active",
  },
  {
    id: 45,
    lastName: "Tarly",
    firstName: "Randyll",
    age: 55,
    occupation: "Lord",
    city: "Horn Hill",
    status: "Deceased",
  },
  {
    id: 46,
    lastName: "Hightower",
    firstName: "Alicent",
    age: 35,
    occupation: "Queen",
    city: "King's Landing",
    status: "Active",
  },
  {
    id: 47,
    lastName: "Blackwood",
    firstName: "Benjicot",
    age: 16,
    occupation: "Lord",
    city: "Raventree Hall",
    status: "Active",
  },
  {
    id: 48,
    lastName: "Vance",
    firstName: "Clement",
    age: 38,
    occupation: "Lord",
    city: "Wayfarer's Rest",
    status: "Active",
  },
  {
    id: 49,
    lastName: "Redwyne",
    firstName: "Paxter",
    age: 52,
    occupation: "Admiral",
    city: "The Arbor",
    status: "Active",
  },
  {
    id: 50,
    lastName: "Lothston",
    firstName: "Lucas",
    age: 40,
    occupation: "Knight",
    city: "Harrenhal",
    status: "Deceased",
  },
];

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = Object.keys(rows[0]) as (keyof RowData)[];
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        marginTop: "20px",
        border: "solid 1px lightgray",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  align={column === "id" ? "center" : "left"}
                  style={{ minWidth: "150px", fontWeight: 800, fontSize: 17 }}
                >
                  {column[0].toUpperCase() + column.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column}
                          align={column === "id" ? "center" : "left"}
                        >
                          {row[column] ? row[column] : "N/A"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
