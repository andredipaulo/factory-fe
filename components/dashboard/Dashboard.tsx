import React, { useEffect, useState } from "react";
import CardClients from "./CardClients";

export default function Dashboard(){
    return (                           
        <div className="">
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">        
                <div className="flex items-center py-2">          
                    <p className="text-gray-700 text-3xl font-bold">Dashboard</p>
                </div>

                <div className="flex items-center py-2">
                    
                </div>        
            </div>

            <main className="h-full overflow-y-auto">            
                <div className="mx-auto grid">                
                    {/* <!-- Cards --> */}                    
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

                        {/* <!-- Card --> */}
                        <CardClients />
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Emprestimos
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                24
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                My Tutorials
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                376
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">                    
                            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                My Purchases
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                35
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Cards --> */}
                </div>
            </main>
        </div>
        
    )

}