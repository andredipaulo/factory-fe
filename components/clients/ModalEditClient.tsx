import React, { useState, useEffect, FormEvent, useRef } from "react";
import { api } from "../../services/api";

interface ClientsProps{
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    limit: string;
    status: string;  
}

// interface TableClientsProps {
//     client: ClientsProps[];
//     onEditSuccess: (updatedClients: ClientsProps[]) => void; 
// }    

interface ModalEditClientProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    onEditSuccess: (updatedClients: ClientsProps[]) => void;
    client: ClientsProps;
  }

export default function ModalEditClient( { showModal = false, setShowModal, client, onEditSuccess}: ModalEditClientProps ){   
    
    const first_nameRef = useRef<HTMLInputElement | null>(null)
    const last_nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const limitRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        
        if (!client) {
            return;
        }        
        
        if( !first_nameRef.current?.value ||
            !last_nameRef.current?.value ||
            !emailRef.current?.value ||
            !limitRef.current?.value){
                return;
        }
        
        try{        
            const response = await api.put('/clients/' + client.id, {
                id: client.id,
                first_name: first_nameRef.current?.value,
                last_name: last_nameRef.current?.value,
                email: emailRef.current?.value,
                limit: limitRef.current?.value,         
                status: "Ativo"
            })                                          
            console.log(response.data);
            onEditSuccess(response.data);
            
            setShowModal(false);

        } catch (error) {
            console.error('Erro ao enviar a solicitação POST', error);
        }

    }

    useEffect(() => {        
        // Lógica adicional para lidar com a visibilidade do modal
      }, [showModal]);

    return (        
        <>      
        {/* MODAL  */}
            {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Editar Cliente
                                </h3>
                                <button                                    
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"                            
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-black block outline-none focus:outline-none">
                                    ×
                                    </span>
                                </button>
                            </div>                
                            {/*header*/}
                            <form className="flex flex-col my-6" onSubmit={handleSubmit}>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">                    
                                <div className="flex flex-row gap-2">
                                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded last:mr-0 mr-1">
                                            Nome
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="Nome"                            
                                            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
                                            ref={first_nameRef}                                    
                                            defaultValue={client?.first_name || ''}
                                            name="first_name"                                            
                                        />
                                        <span                             
                                            className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>

                                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded last:mr-0 mr-1">
                                            Sobrenome
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="Sobrenome"
                                            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"                                            
                                            ref={last_nameRef}
                                            defaultValue={client?.last_name || ''}                                            
                                            name="last_name"                                            
                                        />
                                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>

                                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded last:mr-0 mr-1">
                                            Limite
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="Limite"
                                            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
                                            ref={limitRef}
                                            defaultValue={client?.limit || ''}
                                            name="limit"
                                        />
                                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded last:mr-0 mr-1">
                                        E-mail
                                    </span>
                                    <input 
                                        type="text" 
                                        placeholder="E-mail"
                                        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
                                        ref={emailRef}
                                        defaultValue={client?.email || ''}
                                        name="email"
                                    />
                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            {/*body*/}
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                Fechar
                                </button>
                                <button                      
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    // onClick={ () => handleSubmit}
                                    onClick={handleSubmit}
                                >
                                Gravar
                                </button>
                            </div>
                            {/*footer*/}
                            </form>
                        </div>
                        {/*content*/}
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black">
                    
                </div>
            </>
            ) : null}        
        {/* FIM MODAL  */}
        </>
    )
}