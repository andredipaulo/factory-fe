import React, { useEffect, useState, FormEvent, useRef } from "react";
import {Flex, Button} from "@chakra-ui/react"
import ModalEditClient from "./ModalEditClient";

interface ClientsProps{
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  limit: string;
  status: string;  
}

interface TableClientsProps {
  clients: ClientsProps[];  
  onEditSuccess: (updatedClients: ClientsProps[]) => void; // Adicione esta linha  
}

export default function TableClient({ clients, onEditSuccess }: TableClientsProps) {
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(clients.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;  
  
  console.log(clients);
  
  if (!Array.isArray(clients)) {
    alert("clients nao é uma matriz"+ clients);
    console.error("clients não é uma matriz:", clients);
    // Lógica de tratamento, como definir clients como uma matriz vazia ou mostrar uma mensagem de erro
    return null;
  }

  const displayedClients = clients.slice(startIndex, endIndex);  

  // const [selectedClient, setSelectedClient] = useState<ClientsProps | null>(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect( ()=>{
    setTotalPages(Math.ceil(clients.length / itemsPerPage));
  }, [currentPage, displayedClients]);   

 
  return (
    <div className="">      
      <div className="-mx-2 sm:-mx-1 overflow-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-2 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Cliente {clients.length}
                  </th>
                  <th className="px-5 py-2 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Empréstimo
                  </th>
                  <th className="px-1 py-2 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                  </th>
                  <th className="px-1 py-2 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                  </th>
                  <th className="px-1 py-2 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedClients.map((client) => (
                  <tr key={client.id}>
                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {client.first_name} {client.last_name}
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">{client.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{client.last_name}</p>
                      <p className="text-gray-600 whitespace-no-wrap">R$</p>
                    </td>

                    <td className="px-1 py-2 border-b border-gray-200 bg-white text-sm">                      
                      <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                    </td>

                    <td className="px-1 py-2 border-b border-gray-200 bg-white text-sm">
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold ${ client.status == "Ativo" ? `text-green-500`: `text-red-500`} leading-tight`}
                      >
                        <span
                            aria-hidden                            
                            className={`absolute inset-0 ${ client.status == `Ativo` ? `bg-green-200`: `bg-red-200`} opacity-50 rounded-full`}                              
                          ></span>                          
                        <span className="relative">{client.status}</span>
                      </span>
                    </td>                                        


                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                          onClick={() =>{
                            setSelectedClient(client)
                            setShowModal(true)                              
                          }}
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                            ></path>
                          </svg>
                          
                        </button>

                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              //fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              //clip-rule="evenodd"
                            ></path>
                          </svg>
                          
                        </button>
                      </div>
                    </td>   

                    {/* <td className="px-1 py-2 border-b border-gray-200 bg-white text-sm">
                        
                          <button className="relative inline-block px-3 py-1 font-semibold bg-yellow-200 rounded-full"
                            onClick={() =>{
                              setSelectedClient(client)
                              setShowModal(true)                              
                            }}
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              
                            </svg>
                            Editar
                          </button>

                          <button className="relative inline-block px-3 py-1 font-semibold bg-red-200 rounded-full"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              
                            </svg>
                            Excluir
                          </button>
                    </td> */}
                  </tr>                                    
                ))}
              </tbody>
            </table>                               

            {/* Seção de paginação */}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">                
                Mostrando página {currentPage} de {Math.max(totalPages)} no total.
              </span>

              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className="text-sm bg-gray-300 hover-bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= (totalPages) }
                >
                  Next
                </button>
              </div>
            </div>
            {/* Seção de paginação */}
        </div>
      </div>            
      <ModalEditClient 
        showModal={showModal} 
        setShowModal={setShowModal}
        client={selectedClient}      
        onEditSuccess={onEditSuccess}
      />
    </div>     
  )
}
