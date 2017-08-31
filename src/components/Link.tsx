import * as React from "react";

interface IProps {
  description: string;
  url: string;
}

const Link = ({ description, url }: IProps) => (
  <div>
    {description} ({url})
  </div>
);

export default Link;
