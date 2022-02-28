import { ResourceComponentProps } from 'react-admin';

export type ListFunctionalComponentReactAdmin<GenericProps = object> = (
  props: React.PropsWithChildren<
    ResourceComponentProps<GenericProps, unknown, unknown>
  >,
) => JSX.Element;
