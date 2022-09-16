

 // "15:00" -> [15,00]

export function covertHourStringToMinutes(hourString: string){
  const [hours,minutes] = hourString.split(":").map(Number);

  const minutreAmount = (hours * 60) + minutes;
  
  return minutreAmount

}