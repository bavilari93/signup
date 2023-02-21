export type RoutesProps = {
    path: string;
    layout?: React.ElementType;
    guard?: React.ElementType;
    protected?: boolean;
    routes?: ChildRoute[];
    component?: React.LazyExoticComponent<() => JSX.Element>;
  }
  export type ChildRoute = {
    path: string;
    guard?: React.ElementType;
    component?: React.LazyExoticComponent<() => JSX.Element>;
  }