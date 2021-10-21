import React from 'react';
import { ItemMenu } from './ItemMenu/ItemMenu';

export const Menu = () => {
    return (
        <div className="menu">
            <ItemMenu
                title={"Gerenciamento de Categorias"}
                redirectTo={'/management-category'}
                style={{ margin: '10px 10px', height: '80px', width: '80px' }}
                icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wtM1ux-GVwq4jgk1dmQs-eAJxDY1sOEIV3aOoAT3cpyYhW3d1_fGj-Q_eNVNQevwK0&usqp=CAU"}
            />
             <ItemMenu
                title={"Gerenciamento de Dispositivos"}
                redirectTo={'/management-device'}
                icon={"http://cdn.icon-icons.com/icons2/1875/PNG/512/devices_119983.png"}
            />
        </div>
    )
};
