import './DentHome.css';
import { Menu } from "antd";

export default function DentHome(){
  return(
   <header className='App-menu'>
    <Menu items={[
      { label: "HOME", key: "home"},
      { label: "PEDIDOS", key: "pedidos",
        children:[
          {label: "Registrar Pedidos", key: "registro"},
          {label: "Ver Lista de Pedidos", key: "lista"},
          {label: "Buscar Pedido", key: "buscar"}
        ]},
      { label: "ODONTOLOGOS", key: "odontologos",
        children:[
          {label: "Registrar Odontologos", key: "registroOdo"},
          {label: "Ver Lista de Odontolgos", key: "ListaOdo"},
          {label: "Buscar Odontolgos", key: "buscarOdo"}
        ]},
      { label: "PACIENTES", key: "pacientes"},
      {label: "PROVEEDORES", key: "proveedores"},
      {label: "MATERIALES", key: "materiales"},
      {label: "REPORTES", key: "reportes"}
      
    ]}>

    </Menu>
   </header>
  )
}
  


