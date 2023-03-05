import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, useDataProvider } from 'react-admin';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Button } from '@material-ui/core';
import JSONInput from 'react-json-editor-ajrm';
import Editor from '@monaco-editor/react';
import { isJsonString } from '@src/utils/isJsonString';

type JsonEditorInput = {
  error: boolean;
  jsObject: Record<string, unknown>;
  json: string;
  lines: number;
  markupText: string;
  plainText: string;
};

const ApiTest = () => {
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
    }
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
        <Editor
          height="8rem"
          language="json"
          value={jsonBody}
          onChange={handleChangeJsonBody}
        />
        <Button variant="contained" color="primary" onClick={handleSendRequest}>
          Send Request
        </Button>

        <h2>Response</h2>
        <p>Status: {statusResponse}</p>
        <p>Body: {JSON.stringify(bodyResponse)}</p>
      </CardContent>
    </Card>
  );
};

export default ApiTest;
