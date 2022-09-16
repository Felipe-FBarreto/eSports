
 export function convertMinutesToHoursString(minutreAmount: number){
 
  const hours = Math.floor(minutreAmount / 60);
  const minutes = minutreAmount % 60;

  return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
  

}