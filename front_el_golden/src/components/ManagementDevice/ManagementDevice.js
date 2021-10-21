import React, { useEffect, useState } from 'react';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Table } from '../shared/Table/Table'
import { Loader } from '../shared/Loader/Loader';
import { Modal } from '../shared/Modal/Modal';
import { TrashButton } from '../shared/TrashButton/TrashButton';
import { TitlePage } from '../shared/TitlePage/TitlePage';
import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { api } from '../../scripts/Request';
import toastr from 'toastr';

export const ManagementDevice = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [itemSelected, setItemSelected] = useState({ category: '', id: '' });

    const [nameCategoryValue, setNameCategoryValue] = useState('');
    const [codeCategoryValue, setCodeCategoryValue] = useState(null);
    const [colorDeviceValue, setColorDeviceValue] = useState('');
    const [partNumberValue, setPartNumberValue] = useState(null);

    const columnsTable = [{
        Header: 'ID',
        accessor: 'id',
        width: '200px'
    },
    {
        Header: 'Nome da Categoria',
        accessor: 'category',
        width: '400px'
    },
    {
        Header: 'Cor',
        accessor: 'color',
        width: '100px'
    },
    {
        Header: 'Número da Peça',
        accessor: 'part_number',
        width: '200px'
    },
    {
        Header: 'Excluir',
        component: (item) => <TrashButton onClick={() => {
            setItemSelected(item);
            setIsOpenModal(true);
        }} />
    }];

    useEffect(() => {
        getDevices();
    }, []);

    const _deleteItem = async () => {
        const success = () => {
            toastr.success('Categoria excluida com sucesso');
            setIsLoading(false);
            getDevices();
            setIsOpenModal(false);
        };

        const fail = () => {
            setIsLoading(false);
        };

        try {
            const result = await api.post(GetApiRoutes('DeleteDevice'), { id: itemSelected.id });

            success(result);
        } catch (error) {
            fail(error);
        }
    };

    const _save = async () => {
        const success = () => {
            toastr.success('Dispositivo criado com sucesso');
            setIsLoading(false);
            getDevices();
        };

        const fail = () => {
            setIsLoading(false);
        };

        const payload = {
            name_category: nameCategoryValue,
            color: colorDeviceValue,
            part_number: parseInt(partNumberValue)
        };

        try {
            const result = await api.post(GetApiRoutes('SetDevice'), payload);

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

    const getDevices = async () => {
        const success = (data) => {
            setIsLoading(false);

            const dataSort = _orderByDesc(data);
            setDataTable(dataSort);
        };

        const fail = () => {
            setIsLoading(false);
        };

        try {
            const result = await api.get(GetApiRoutes('GetDevices'));

            success(result.data);
        } catch (error) {
            fail(error);
        }
    };

    const _clearFields = () => {
        setNameCategoryValue('')
        setCodeCategoryValue(null);
        setColorDeviceValue('');
        setPartNumberValue(null);
    };

    return (
        <div className="color-background-page management-device">
            <TitlePage title="Gerenciamento de Dispositivos" />
            <Loader isLoading={isLoading} />
            <div className="input-create-device">
                <Input
                    placeholder={"Digite o nome da categoria a ser criada"}
                    value={nameCategoryValue}
                    onChange={setNameCategoryValue}
                    style={{ width: '400px' }}
                />
                <Input
                    placeholder={"Digite a cor"}
                    value={colorDeviceValue}
                    onChange={setColorDeviceValue}
                    style={{ width: '100px' }}
                />
                <Input
                    placeholder={"Digite o número da peça"}
                    value={partNumberValue}
                    onChange={setPartNumberValue}
                    style={{ width: '200px' }}
                />
                <Button title={"Salvar"} onClick={_save} />
            </div>
            <div class="table-categories">
                <Table data={dataTable} columns={columnsTable} />
            </div>
            <Modal
                title={"Confirmar exclusão"}
                isOpen={isOpenModal}
                message={`Deseja excluir a categoria ${itemSelected.id} - ${itemSelected.category.toUpperCase()}?`}
                onConfirm={_deleteItem}
                onCancel={() => setIsOpenModal(false)} />
        </div>
    );
};
