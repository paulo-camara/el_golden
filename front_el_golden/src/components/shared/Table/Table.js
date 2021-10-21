import React from 'react';

export const Table = () => {
    const columns = [{
        Header: 'ID',
        accessor: 'id',
        minWidth: '300px'
    },
    {
        Header: 'Nome da Categoria',
        accessor: 'name',
        minWidth: '300px'
    },
    {
        Header: 'Nome da Categoria',
        accessor: 'name',
    }];

    const data = [{ id: 123, name: 'paulo' }, { id: 321, name: "camara" }]

    return <div className="table">
        {columns.map((item) => {
            return <div>
                <div className="headers" style={{ width: item.width }}>
                    {item.Header}
                </div>
                <div>{data.map((elem) => {
                    return <div className="row" style={{ minWidth: item.minWidth }}>
                        {elem[item.accessor]}
                    </div>
                })}</div>
            </div>
        })}
    </div>
}