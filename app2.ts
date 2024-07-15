/**  Práctica 26
 * Calcular la edad en años meses y dias
 * @param birthDate
 * @returns
 */

console.log(getAgeYearMonth('1963-01-05'));

export function getAgeYearMonth(birthDate: string) {
    /** Validar fecha */
    if (birthDate === null) {
      birthDate = '1963-01-05'
    }
  
    let dateValues = birthDate.split('-')
    let birthDateDay = Number(dateValues[2])
    let birthDateMonth = Number(dateValues[1])
    let birthDateYear = Number(dateValues[0])
  
    /** obtener fecha de hoy */
    let dateNow = new Date()
    let dateNowYear = dateNow.getFullYear()
    let dateNowMonth = dateNow.getMonth() + 1
    let dateNowDay = dateNow.getDate()
  
    /** Se calcula la fecha en años, meses y dias */
    let ageFull = dateNowYear - birthDateYear
    if (dateNowMonth < birthDateMonth) {
      ageFull--
    }
    if (birthDateMonth == dateNowMonth && dateNowDay < birthDateDay) {
      ageFull--
    }
  
    /** Calcula los meses */
    let monthes = 0
  
    if (dateNowMonth > birthDateMonth && birthDateDay > dateNowDay)
      monthes = dateNowMonth - birthDateMonth - 1
    else if (dateNowMonth > birthDateMonth)
      monthes = dateNowMonth - birthDateMonth
    if (dateNowMonth < birthDateMonth && birthDateDay < dateNowDay)
      monthes = 12 - (birthDateMonth - dateNowMonth)
    else if (dateNowMonth < birthDateMonth)
      monthes = 12 - (birthDateMonth - dateNowMonth + 1)
    if (dateNowMonth == birthDateMonth && birthDateDay > dateNowDay) monthes = 11
  
    /** Calcula los dias */
    let days = 0
    if (dateNowDay > birthDateDay) days = dateNowDay - birthDateDay
    if (dateNowDay < birthDateDay) {
      let ultimodaymonth = new Date(dateNowYear, dateNowMonth - 1, 0)
      days = ultimodaymonth.getDate() - (birthDateDay - dateNowDay)
    }
  
    return `Edad de Carlos Coloch: ${ageFull} Año(s), ${monthes} mes(es), ${days} dia(s),`
  }