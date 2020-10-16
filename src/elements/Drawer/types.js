export React from "react";

export type Props = {
  side: string,                                        open: boolean,
  toggleDrawer: () => void,                            children: React.Node,
};
