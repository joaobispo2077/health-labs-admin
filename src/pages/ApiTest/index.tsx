import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title, useDataProvider, useNotify } from 'react-admin';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button, Box, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import { isJsonString } from '@src/utils/isJsonString';
import { useStyles } from './styles';
// Migrate Date Picker component import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; https://mui.com/x/react-date-pickers/getting-started/
// Migrate JSS to to emotion https://mui.com/material-ui/migration/migrating-from-jss/
// Adapt all paths to mui npx @mui/codemod v5.0.0/preset-safe
// npm uninstall @material-ui/*
// npm i ra-data-simple-rest@latest
// npm i react-admin@latest

const ApiTest = () => {
  const classes = useStyles();
  const notify = useNotify();
  const dataProvider = useDataProvider();

  const requestTypes = ['GET', 'POST', 'PUT', 'DELETE'];
  const [selectedRequestType, setSelectedRequestType] = useState<string>();
  const urlOptions = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://pokeapi.co/api/v2/pokemon',
    'http://localhost:3333/exams',
  ];
  const [selectedUrl, setSelectedUrl] = useState<string>();
  const [jsonBody, setJsonBody] = useState<string>();

  const [statusResponse, setStatusResponse] = useState<string>();
  const [bodyResponse, setBodyResponse] = useState<Record<string, unknown>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const handleChangeJsonBody = (value?: string) => {
    console.log('handleChangeJsonBody', value);
    if (!value) return;
    setJsonBody(value);
  };

  const handleSendRequest = async () => {
    setIsLoading(true);
    try {
      if (!selectedRequestType || !selectedUrl) return;

      if (jsonBody && !isJsonString(jsonBody)) {
        return;
      }

      const response = (await dataProvider.customPost('api-test', {
        body: {
          method: selectedRequestType,
          url: selectedUrl,
          data: jsonBody ? JSON.parse(jsonBody) : undefined,
        },
      })) as any;
      console.log('response', response);
      setStatusResponse(response.status);
      setBodyResponse(response.data);
    } catch (error: any) {
      console.log('error', error.message);
      // notify(error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <Title title="ApiTest" />
      <CardContent className={classes.container}>
        <Box display={'flex'} width={'100%'} gap={'5px'}>
          <Box width={'10rem'}>
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
          </Box>
          <Box width={'40rem'}>
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
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSendRequest}
            disabled={isLoading}
            size="large"
          >
            Executar
          </Button>
        </Box>
        <Box marginTop={'1rem'} gap={'1rem'}>
          <Typography variant="h6">Parâmetros de execução</Typography>
          <Editor
            height="8rem"
            language="json"
            value={jsonBody}
            onChange={handleChangeJsonBody}
          />
        </Box>

        {statusResponse && (
          <>
            <Typography variant="h5">Resultado</Typography>
            <Box marginTop={'1rem'} gap={'1rem'}>
              <Typography variant="h6">Status: {statusResponse}</Typography>
              <Typography variant="h6">Parâmetros do resultado</Typography>
              <Editor
                height="8rem"
                language="json"
                value={JSON.stringify(bodyResponse)}
              />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ApiTest;
