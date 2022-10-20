import { ReactNode } from 'react';

export interface TheReactLibProps {
  children?: ReactNode;
}

export function TheReactLib(props: TheReactLibProps) {
  return <span>the-react-lib</span>;
}
