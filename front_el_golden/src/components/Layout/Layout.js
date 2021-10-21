import React from 'react';
import { Link } from "react-router-dom";

/** Para que não seja necessário usar repetidamente 
 * componentes em cada tela, foi feito um layout padrão
 * que cada tela é implementada dentro dele
 */
export const Layout = ({ children }) => {
    return <div className="layout">
        <div className="container-layout">
            <span className="title-principal">Gerenciamento Eldorado</span>
        </div>
        {children}
    </div>
}