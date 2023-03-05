import { ExamsResources } from '@src/pages/Exams';
import { useEffect, useCallback, useState } from 'react';
import { AdminUI, Resource, ResourceProps } from 'react-admin';

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
    <AdminUI>
      {resources.map((resource) => (
        <Resource key={resource.name} {...resource} />
      ))}
    </AdminUI>
  );
}
