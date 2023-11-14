import { useEffect, useState } from 'react';

export function FormatarData({ data }: { data: string }) {
   const [dataFormatada, setDataFormatada] = useState('');

   useEffect(() => {
      //const [dia, mes, ano] = data.split('-');
      const [ano, mes, dia] = data.split('-');
      setDataFormatada(`${dia}/${mes}/${ano}`);
   }, [data]);

   return dataFormatada

}