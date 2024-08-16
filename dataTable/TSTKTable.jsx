// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
// ---------------------------      Local Comp      ----------------------------------------------------------------

const TSTKTable = ({data}) => {
    // ---------------------- hooks --------------------------------------------------
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    const columns = [
        {
            accessorKey: '---name in data---',
            header: '---name displayed---'
        },
        {
            id: 'actions',
            header: '',
            cell: ({ row }) => (
                <IconButton aria-label="EditIcon" size="small" color="info"
                            onClick={()=>{handleEdit(row.original);}}>
                    {/*Icon*/}
                </IconButton>
            )
        }
    ];

    /*
     * data format:
     *          [
     *      { accessorKey1: 'xxx', accessorKey2: xxx, accessorKey3: 'xxx' }
     *          ]
     *
     */
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <table style={{borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} style={{borderBottom: '1px solid black', padding: '10px'}}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} style={{padding: '10px', borderBottom: '1px solid #ddd'}}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default memo(TSTKTable);