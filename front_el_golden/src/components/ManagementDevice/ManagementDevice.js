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
    const [itemSelected, setItemSelected] = useState({ name_category: '', id: '' });
    const [colorDeviceValue, setColorDeviceValue] = useState('');
    const [partNumberValue, setPartNumberValue] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState({});

    const columnsTable = [{
        Header: 'ID',
        accessor: 'id_device',
        width: '200px'
    },
    {
        Header: 'Categoria',
        accessor: 'name_category',
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
        _getCategories();
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
            const result = await api.post(GetApiRoutes('DeleteDevice'), { id: itemSelected.id_device });

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
            _clearFields();
        };

        const fail = () => {
            setIsLoading(false);
        };

        const payload = {
            category: parseInt(categorySelected.id),
            color: colorDeviceValue,
            part_number: parseInt(partNumberValue)
        };

        if (!payload.category || !payload.color || !payload.part_number) {
            return toastr.error('Preencha os campos corretamente');
        }

        try {
            const result = await api.post(GetApiRoutes('SetDevice'), payload);

            success(result);
        } catch (error) {
            fail(error);
        }
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

    const _getCategories = async () => {
        const success = (data) => {
            setIsLoading(false);
            setCategories(data);
            getDevices();
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

    const _orderByDesc = (data) => {
        return data.sort(function (a, b) {
            return a.id_device > b.id_device ? -1 : a.nome > b.nome ? 1 : 0;
        });
    };

    const _clearFields = () => {
        setColorDeviceValue('');
        setPartNumberValue('');
    };

    return (
        <div className="color-background-page management-device">
            <TitlePage title="Gerenciamento de Dispositivos" />
            <Loader isLoading={isLoading} />
            <div className="input-create-device">
                <select className="combo-categories" onChange={({ target }) => setCategorySelected({ name_category: '-', id: target.value })}>
                    <option value={null}>Selecione</option>
                    {categories.map((item) => {
                        return <option value={item.id}>{item.name_category}</option>
                    })}
                </select>
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
                <Button title={"SALVAR"} onClick={_save} />
            </div>
            <div class="table-categories">
                <Table data={dataTable} columns={columnsTable} />
            </div>
            <Modal
                title={"Confirmar exclusão"}
                isOpen={isOpenModal}
                message={`Deseja excluir a categoria ${itemSelected.id} - ${itemSelected.name_category.toUpperCase()}?`}
                onConfirm={_deleteItem}
                onCancel={() => setIsOpenModal(false)} />
        </div >
    );
};
