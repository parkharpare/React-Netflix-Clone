import React from "react";

function AccordionItem({children, ...restProps}) {
  return (
    <div {...restProps}>{children}</div>
  )
}

export default AccordionItem