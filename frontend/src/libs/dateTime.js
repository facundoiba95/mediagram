// @params dateCreate = ISOString() "2024-07-31T03:33:44.487Z"
export default (dateCreate) => {
  const dateRecived = new Date(dateCreate);
  const dateNow = new Date();

  const diffInHours = Math.abs(dateNow - dateRecived) / 3600000;
  const diffInMinutes = Math.abs(dateNow - dateRecived) / 60000;

  if (dateNow > dateRecived && diffInHours < 24) {
    if (diffInMinutes < 60) {
      return `Hace ${Math.floor(diffInMinutes)} minutos.`;
    } else {
      return `Hace ${Math.floor(diffInHours)} horas.`;
    }
  } else if (diffInHours > 24) {
    const diffInDays = Math.floor(diffInHours / 24);
    return `Hace ${diffInDays} días.`;
  }
}