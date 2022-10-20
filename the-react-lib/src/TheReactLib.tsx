import React, { PropsWithChildren } from 'react';

interface TheReactLibOwnProps {}

export type TheReactLibProps = PropsWithChildren<TheReactLibOwnProps>;

export function TheReactLib(props: TheReactLibProps) {
  return <span>the-react-lib</span>;
}
