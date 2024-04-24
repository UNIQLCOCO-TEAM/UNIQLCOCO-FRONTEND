import React, {useCallback} from 'react'
import {  
  Table,  
  TableHeader,  
  TableBody,  
  TableColumn,  
  TableRow,  
  TableCell,
  User,
} from "@nextui-org/react";
import {popColumns, popProducts} from '../../src/libs/productData'

const PopTable = () => {
  /** Rendering logic **/
  const renderCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];
    console.log(JSON.stringify(product))
    switch (columnKey) {
      case "picture":
        return (
          <User
            avatarProps={
              {
                radius: "full", 
                src: product.path,
                size: "sm",
              }
            }
            name={cellValue}

          />
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize">{cellValue}</p>
          </div>
        );
      // case "inventory":
      //   return (
      //     <div className='flex gap-5'>
      //       <div className="flex flex-col">
      //         <p className="font-medium capitalize">S</p>
      //         <p className="capitalize text-default-400">{cellValue.s}</p>
      //       </div>
      //       <div className="flex flex-col">
      //         <p className="font-medium capitalize">M</p>
      //         <p className="capitalize text-default-400">{cellValue.m}</p>
      //       </div>
      //       <div className="flex flex-col">
      //         <p className="font-medium capitalize">L</p>
      //         <p className="capitalize text-default-400">{cellValue.l}</p>
      //       </div>
      //       <div className="flex flex-col">
      //         <p className="font-medium capitalize">XL</p>
      //         <p className="capitalize text-default-400">{cellValue.xl}</p>
      //       </div>
      //       <div className="flex flex-col">
      //         <p className="font-medium capitalize">XXL</p>
      //         <p className="capitalize text-default-400">{cellValue.xxl}</p>
      //       </div>
      //     </div>
      //   );
      case "sold":
        return (
          <div className='flex gap-5'>
            <div className="flex flex-col">
              <p className="font-medium capitalize">S</p>
              <p className="capitalize text-default-400">{cellValue.s}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">M</p>
              <p className="capitalize text-default-400">{cellValue.m}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">L</p>
              <p className="capitalize text-default-400">{cellValue.l}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">XL</p>
              <p className="capitalize text-default-400">{cellValue.xl}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">XXL</p>
              <p className="capitalize text-default-400">{cellValue.xxl}</p>
            </div>
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize">{cellValue}</p>
          </div>
        );
        case "income":
          return (
            <div className='flex gap-5'>
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
        case "total":
          return (
            <div className='flex gap-5'>
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <Table aria-label="Example static collection table" className="@apply rounded-lg bg-gray-100">
        <TableHeader columns={popColumns} >
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={popProducts}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
    </Table>
    </div>
  )
}

export default PopTable