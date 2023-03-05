import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Button } from '@material-ui/core';

const ApiTest = () => {
  const requestTypes = ['GET', 'POST', 'PUT', 'DELETE'];
  const [selectedRequestType, setSelectedRequestType] = useState<string>();
  const urlOptions = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://pokeapi.co/api/v2/pokemon',
  ];
  const [selectedUrl, setSelectedUrl] = useState<string>();

  const handleSelectedRequestTypeChange = (
    event: React.ChangeEvent<{}>,
    value: string | null,
  ) => {
    if (!value) return;

    setSelectedRequestType(value);
  };

  const handleSelectedUrlChange = (
    event: React.ChangeEvent<{}>,
    value: string | null,
  ) => {
    if (!value) return;

    setSelectedUrl(value);
  };

  return (
    <Card>
      <Title title="ApiTest" />
      <CardContent>
        <Autocomplete
          id="request-type"
          filterSelectedOptions
          autoComplete
          noOptionsText="No options"
          loadingText="Loading..."
          getOptionLabel={(option) => option}
          options={requestTypes}
          value={selectedRequestType}
          onChange={handleSelectedRequestTypeChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Request Type"
              placeholder="Request Type"
            />
          )}
        />
        <Autocomplete
          id="request-url"
          filterSelectedOptions
          autoComplete
          noOptionsText="No options"
          loadingText="Loading..."
          getOptionLabel={(option) => option}
          options={urlOptions}
          value={selectedUrl}
          onChange={handleSelectedUrlChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Request Url"
              placeholder="Request Url"
            />
          )}
        />
        <Button variant="contained" color="primary">
          Send Request
        </Button>
      </CardContent>
    </Card>
  );
};

export default ApiTest;
