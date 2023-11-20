import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>            
        <div className="flex items-center justify-center h-full min-h-screen flex-col py-2">
            <Head>
                <title>Factory - offline</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Você está offline</h1>
            <p>Conecte a internet</p>      
        </div>
    </>
  );
}