import { ExamsResources } from '@src/pages/Exams';
import { useEffect, useCallback, useState } from 'react';
import { AdminUI, CustomRoutes, Resource, ResourceProps } from 'react-admin';
import { Menu } from '../Menu';
import { Route } from 'react-router-dom';
import ApiTest from '@src/pages/ApiTest';

async function loadResources() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // emulate async call
  return [ExamsResources];
}

export function AsyncResources() {
  const [resources, setResources] = useState<ResourceProps[]>([]);

  const loadResourcesAsync = useCallback(async () => {
    const resources = await loadResources();
    setResources(resources);
  }, []);

  useEffect(() => {
    loadResourcesAsync();
  }, []);

  return (
    <AdminUI disableTelemetry menu={Menu}>
      {resources.map((resource) => (
        <Resource key={resource.name} {...resource} />
      ))}
      <CustomRoutes>
        <Route path="/api-test" element={<ApiTest />} />
      </CustomRoutes>
    </AdminUI>
  );
}
