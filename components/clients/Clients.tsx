import { useEffect, useState, FormEvent, useRef } from "react";
import { api } from "../../services/api";
import TableClients from "./TableClients";
import ModalAddClient from "./ModalAddClient";
import { all } from "axios";

export default function Client(){  

    // const [clients, setClients] = useState<ClientsProps[]>([]);
    const [clients, setClients] = useState([]);
    const [showModal, setShowModal] = useState(false);             
    
    async function loadClients() {
        try {
          const response = await api.get("/clients");
          const allClients = response.data;
          console.log(response.data);
          setClients(allClients);

        } catch (error) {
          alert("Erro ao carregar clientes" + error);          
        }
    };  
    
    const handleEditSuccess = (updatedClients) => {                        
        // setClients(allClients => [...allClients, updatedClients]);        
    };

    const handleSingleEditSuccess = (updatedClient) => {
        const updatedClients = clients.map((client) =>
          client.id === updatedClient.id ? updatedClient : client
        );
    
        setClients(updatedClients);
    };


    useEffect( ()=>{
        loadClients();
    }, []);

    return (            
        <div className="">
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">        
                <div className="flex items-center py-2">          
                    <p className="text-gray-700 text-3xl font-bold">Clients</p>
                </div>
                <div className="flex items-center py-2">
                    <a  onClick={() => setShowModal(true)}
                        className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                    >
                        Adicionar Cliente
                    </a>
                </div>        
            </div>
            <TableClients clients={clients} onEditSuccess={handleSingleEditSuccess}/>
            <ModalAddClient showModal={showModal} setShowModal={setShowModal} setClients={setClients}/>
        </div>     
    )
}