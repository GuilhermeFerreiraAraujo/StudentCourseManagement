import React from "react";
import { useTable, usePagination } from "react-table";
import './Table.scss';

export default function Table({ columns, data, onDoubleClick }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10 }
    },
        usePagination)
    {

        let pagination = "";
        if (data.length > pageSize) {
            pagination = (<div className="row text-center">
                <div >
                    {' '}
                    <button className="btn btn-secondary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button className="btn btn-secondary" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>

                    <button className="btn btn-secondary" onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button className="btn btn-secondary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                </div>
            </div>)
        }

        return (
            <div className="Table">
                <table {...getTableProps()}>
                    <thead className="table-header">
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (<th {...column.getHeaderProps()}>{column.render('Header')}</th>))}
                                </tr>))
                        }
                    </thead>

                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} onDoubleClick={() => onDoubleClick(row.original.id)}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
                <br/>
                {pagination}
            </div>
        )
    }
}