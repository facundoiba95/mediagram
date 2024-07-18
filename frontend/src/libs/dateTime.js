const opciones = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  

  // @params dateCreate = new Date();
  export default (dateCreate) => {
    const dateNow = new Date(); 

    const diffInHours = Math.abs(dateNow - dateCreate) / 3600000;
    const diffInMinutes = Math.abs(dateNow - dateCreate) / 60000;

    if(dateNow > dateCreate && diffInHours < 24){
      if(diffInMinutes < 60){
         return `Hace ${Math.floor(diffInMinutes)} minutos.`;
       } else {
         return `Hace ${Math.floor(diffInHours)} horas.`;
       }
    } else if (diffInHours > 24) {
         const diffInDays = Math.floor(diffInHours / 24);
         return `Hace ${diffInDays} días.`;
    } 
 }