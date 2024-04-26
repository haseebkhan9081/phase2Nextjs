import React from 'react'

export const Tablerow = ({rowData}) => {
  return (
   <> <tr>
   <td>{rowData.column1}</td>
   <td>{rowData.column2}</td>
   <td>{rowData.column3}</td>

   <td>{rowData.column4}</td>
 </tr>
    </>)
}
