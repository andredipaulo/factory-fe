import React from "react";
import Dashboard from "../components/dashboard/Dashboard"

export default function Home() {
  
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/service-worker.js')
  //     .then((registration) => {
  //       console.log('Service Worker registrado com sucesso:', registration)
  //     })
  //     .catch((error) => {
  //       console.log('Erro ao registrar Service Worker:', error)
  //     })
  // }

  return (
    <>      
      
      <Dashboard />

      {/* <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm">
          <CardClients totalClientes={6}/>

        </div>
        <div className="rounded bg-white h-40 shadow-sm">

        </div>
        <div className="rounded bg-white h-40 shadow-sm">

        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">
        
      </div> */}
    </>
  );
}
