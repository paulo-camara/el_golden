import React from 'react';

export const Table = ({ data, columns }) => {
    return <div className="table">
        {columns.map((item) => {
            return <div>
                <div className="headers" style={{ width: item.width }}>
                    {item.Header}
                </div>
                <div>{data.map((elem) => {
                    return <div className="row" style={{ minWidth: item.minWidth }}>
                        {!elem[item.accessor] && item.component ? item.component(elem.id) : <div className="data-row">{elem[item.accessor]}</div>}
                    </div>
                })}</div>
            </div>
        })}
    </div>
}