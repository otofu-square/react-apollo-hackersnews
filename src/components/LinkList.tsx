import * as React from "react";
import { QueryProps } from "react-apollo";

import { ILink } from "../models/Link";
import Link from "./Link";

interface IProps {
  allLinksQuery: {
    allLinks: ILink[];
  } & QueryProps;
}

const LinkList = ({ allLinksQuery: { loading, error, allLinks } }: IProps) => {
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div>{allLinks.map((link: any) => <Link key={link.id} link={link} />)}</div>
  );
};

export default LinkList;
