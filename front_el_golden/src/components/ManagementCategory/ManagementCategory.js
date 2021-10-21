import React, { useEffect, useState } from 'react';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Table } from '../shared/Table/Table'
import { Loader } from '../shared/Loader/Loader';

import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { api } from '../../scripts/Request';
import toastr from 'toastr';

export const ManagementCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryValue, setCategoryValue] = useState("");
    const [dataTable, setDataTable] = useState([]);

    const columnsTable = [{
        Header: 'ID',
        accessor: 'id',
        width: '400px'
    },
    {
        Header: 'Nome da Categoria',
        accessor: 'name_category',
        width: '700px'
    },
    {
        Header: 'Excluir',
        component: (id) => <Button onClick={() => _deleteItem(id)} title={'Excluir'} />
    }];

    useEffect(() => {
        getCategories();
    }, []);

    const _onChange = (value) => {
        setCategoryValue(value);
    };

    const _deleteItem = async (id) => {
        const success = () => {
            toastr.success('Categoria excluida com sucesso');
            setIsLoading(false);
            getCategories();
        };

        const fail = () => {
            setIsLoading(false);
        };

        try {
            const result = await api.post(GetApiRoutes('DeleteCategory'), { id });

            success(result);
        } catch (error) {
            fail(error);
        }
    };

    const _save = async () => {
        if (!categoryValue) toastr.error("Prencha o campo com o nome da Categoria")

        const success = () => {
            toastr.success('Categoria criada com sucesso');
            setIsLoading(false);
            getCategories();
        };

        const fail = () => {
            setIsLoading(false);
        };

        const payload = {
            name_category: categoryValue
        }

        try {
            const result = await api.post(GetApiRoutes('SetCategory'), payload);

            success(result);
        } catch (error) {
            fail(error);
        }
    };

    const _orderByDesc = (data) => {
        return data.sort(function (a, b) {
            return a.id > b.id ? -1 : a.nome > b.nome ? 1 : 0;
        });
    };

    const getCategories = async () => {
        const success = (data) => {
            setIsLoading(false);

            const dataSort = _orderByDesc(data);
            setDataTable(dataSort);
        };

        const fail = () => {
            setIsLoading(false);
        };

        try {
            const result = await api.get(GetApiRoutes('GetCategories'));

            success(result.data);
        } catch (error) {
            fail(error);
        }
    };

    return (
        <div className="color-background-page management-category">
            <Loader isLoading={isLoading} />
            <div className="input-create-category">
                <Input
                    placeholder={"Digite o nome da categoria a ser criada"}
                    value={categoryValue}
                    onChange={_onChange}
                    style={{ width: '400px' }}
                />
                <Button className="test" title={"Salvar"} onClick={_save} />
            </div>

            <div class="table-categories">
                <Table data={dataTable} columns={columnsTable} />
            </div>
        </div>
    );
};
