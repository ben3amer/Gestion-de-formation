import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const FormateurListResults = ({ formateurs, ...rest }) => {
  const [selectedFormateurIds, setSelectedFormateurIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedFormateurIds;

    if (event.target.checked) {
      newSelectedFormateurIds = formateurs.map((formateur) => formateur._id);
    } else {
      newSelectedFormateurIds = [];
    }

    setSelectedFormateurIds(newSelectedFormateurIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedFormateurIds.indexOf(id);
    let newSelectedFormateurIds = [];

    if (selectedIndex === -1) {
      newSelectedFormateurIds = newSelectedFormateurIds.concat(selectedFormateurIds, id);
    } else if (selectedIndex === 0) {
      newSelectedFormateurIds = newSelectedFormateurIds.concat(selectedFormateurIds.slice(1));
    } else if (selectedIndex === selectedFormateurIds.length - 1) {
      newSelectedFormateurIds = newSelectedFormateurIds.concat(selectedFormateurIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedFormateurIds = newSelectedFormateurIds.concat(
        selectedFormateurIds.slice(0, selectedIndex),
        selectedFormateurIds.slice(selectedIndex + 1)
      );
    }

    setSelectedFormateurIds(newSelectedFormateurIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedFormateurIds.length === formateurs.length}
                    color="primary"
                    indeterminate={
                      selectedFormateurIds.length > 0 &&
                      selectedFormateurIds.length < formateurs.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formateurs.slice(0, limit).map((formateur) => (
                <TableRow
                  hover
                  key={formateur._id}
                  selected={selectedFormateurIds.indexOf(formateur._id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedFormateurIds.indexOf(formateur._id) !== -1}
                      onChange={(event) => handleSelectOne(event, formateur._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src="" sx={{ mr: 2 }}>
                        {formateur.prenom[0] + formateur.nom[0]}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {`${formateur.prenom} ${formateur.nom}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{formateur.email}</TableCell>
                  <TableCell>{formateur.tel}</TableCell>
                  <TableCell>{format(new Date(formateur.createdAt), "MM/dd/yyyy")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={formateurs.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

FormateurListResults.propTypes = {
  formateurs: PropTypes.array.isRequired,
};
