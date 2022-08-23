import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
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
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const ParticipantistResults = ({ participants, ...rest }) => {
  const [selectedParticipantIds, setSelectedParticipantIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedParticipantIds;

    if (event.target.checked) {
      newSelectedParticipantIds = participants.map((participant) => participant.id);
    } else {
      newSelectedParticipantIds = [];
    }

    setSelectedParticipantIds(newSelectedParticipantIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedParticipantIds.indexOf(id);
    let newSelectedParticipantIds = [];

    if (selectedIndex === -1) {
      newSelectedParticipantIds = newSelectedParticipantIds.concat(selectedParticipantIds, id);
    } else if (selectedIndex === 0) {
      newSelectedParticipantIds = newSelectedParticipantIds.concat(selectedParticipantIds.slice(1));
    } else if (selectedIndex === selectedParticipantds.length - 1) {
      newSelectedParticipantIds = newSelectedParticipantIds.concat(selectedParticipantIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedParticipantIds = newSelectedParticipantIds.concat(
        selectedParticipantIds.slice(0, selectedIndex),
        selectedParticipantIds.slice(selectedIndex + 1)
      );
    }

    setSelectedParticipantIds(newSelectedParticipantIds);
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
                    checked={selectedParticipantIds.length === participants.length}
                    color="primary"
                    indeterminate={
                      selectedParticipantIds.length > 0
                      && selectedParticipantIds.length < participants.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.slice(0, limit).map((participant) => (
                <TableRow
                  hover
                  key={participant.id}
                  selected={selectedParticipantIds.indexOf(participant.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedParticipantIds.indexOf(participant.id) !== -1}
                      onChange={(event) => handleSelectOne(event, participant.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={participant.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(participant.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {participant.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {participant.email}
                  </TableCell>
                  <TableCell>
                    {`${participant.address.city}, ${participant.address.state}, ${participant.address.country}`}
                  </TableCell>
                  <TableCell>
                    {participant.phone}
                  </TableCell>
                  <TableCell>
                    {format(participant.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={participants.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ParticipantListResults.propTypes = {
    participants: PropTypes.array.isRequired
};
