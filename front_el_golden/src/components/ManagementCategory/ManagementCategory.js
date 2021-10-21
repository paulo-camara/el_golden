import React, { useEffect, useState } from 'react';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Table } from '../shared/Table/Table'
import { Loader } from '../shared/Loader/Loader';

import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { METHOD_GET, METHOD_POST, api } from '../../scripts/Request';

export const ManagementCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryValue, setCategoryValue] = useState("");

    useEffect(() => {
        getCategories();
    }, []);

    const _onChange = (value) => {
        setCategoryValue(value);
    };

    const _save = async () => {
        if(!categoryValue) return;// retornar toastr

        const success = () => {
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

    const getCategories = async () => {
        const success = () => {
            setIsLoading(false);
        };

        const fail = () => {
            setIsLoading(false);
        };

        try {
            const result = await api.get(GetApiRoutes('GetCategories'));

            success(result);
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
                <Table />
            </div>
        </div>
    );
};
