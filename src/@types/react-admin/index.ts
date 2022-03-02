import { ResourceComponentProps } from 'react-admin';

export type ReactAdminFunctionalComponent<
  GenericProps extends object = object,
> = (
  props: React.PropsWithChildren<
    ResourceComponentProps<GenericProps, unknown, unknown>
  >,
) => JSX.Element;
