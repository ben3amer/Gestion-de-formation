import PropTypes from 'prop-types';
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
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

export const FormationCard = ({ formations,  ...rest }) => {
  const [selectedFormationIds, setSelectedFormationIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const handleSelectAll = (event) => {
    let newSelectedFormationIds;

    if (event.target.checked) {
      newSelectedFormationIds = formations.map((formation) => formation.id);
    } else {
      newSelectedFormationIds = [];
    }

    setSelectedFormationIds(newSelectedFormationIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedFormationIds.indexOf(id);
    let newSelectedFormationIds = [];

    if (selectedIndex === -1) {
      newSelectedFormationIds = newSelectedFormationIds.concat(selectedFormationIds, id);
    } else if (selectedIndex === 0) {
      newSelectedFormationIds = newSelectedFormationIds.concat(selectedFormationIds.slice(1));
    } else if (selectedIndex === selectedFormationIds.length - 1) {
      newSelectedFormationIds = newSelectedFormationIds.concat(selectedFormationIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedFormationIds = newSelectedFormationIds.concat(
        selectedFormationIds.slice(0, selectedIndex),
        selectedFormationIds.slice(selectedIndex + 1)
      );
    }

    setSelectedFormationIds(newSelectedFormationIds);
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
                    checked={selectedFormationIds.length === formations.length}
                    color="primary"
                    indeterminate={
                      selectedFormationIds.length > 0 && selectedFormationIds.length < formations.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Titre</TableCell>
                <TableCell>nombre Sessions</TableCell>
                <TableCell>nombre Participants</TableCell>
                <TableCell>Duree</TableCell>
                <TableCell>Budget</TableCell>
                <TableCell>Année</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formations.slice(0, limit).map((formation) => (
                <TableRow hover key={formation._id} selected={selectedFormationIds.indexOf(formation._id) !== -1}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedFormationIds.indexOf(formation.id) !== -1}
                      onChange={(event) => handleSelectOne(event, formation._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>{formation.titre}</TableCell>
                  <TableCell>{formation.nbSession}</TableCell>
                  <TableCell>{formation.nbParticipant}</TableCell>
                  <TableCell>{formation.duree}</TableCell>
                  <TableCell>{formation.budget}</TableCell>
                  <TableCell>{formation.year}</TableCell>
                  <TableCell>{format(new Date(formation.createdAt), "dd/MM/yyyy")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={formations.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

        

FormationCard.propTypes = {
  formation: PropTypes.object.isRequired
};
