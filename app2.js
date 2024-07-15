"use strict";
/**  Práctica 26
 * Calcular la edad en años meses y dias
 * @param birthDate
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgeYearMonth = getAgeYearMonth;
console.log(getAgeYearMonth('1963-01-05'));
function getAgeYearMonth(birthDate) {
    /** Validar fecha */
    if (birthDate === null) {
        birthDate = '1963-01-05';
    }
    var dateValues = birthDate.split('-');
    var birthDateDay = Number(dateValues[2]);
    var birthDateMonth = Number(dateValues[1]);
    var birthDateYear = Number(dateValues[0]);
    /** obtener fecha de hoy */
    var dateNow = new Date();
    var dateNowYear = dateNow.getFullYear();
    var dateNowMonth = dateNow.getMonth() + 1;
    var dateNowDay = dateNow.getDate();
    /** Se calcula la fecha en años, meses y dias */
    var ageFull = dateNowYear - birthDateYear;
    if (dateNowMonth < birthDateMonth) {
        ageFull--;
    }
    if (birthDateMonth == dateNowMonth && dateNowDay < birthDateDay) {
        ageFull--;
    }
    /** Calcula los meses */
    var monthes = 0;
    if (dateNowMonth > birthDateMonth && birthDateDay > dateNowDay)
        monthes = dateNowMonth - birthDateMonth - 1;
    else if (dateNowMonth > birthDateMonth)
        monthes = dateNowMonth - birthDateMonth;
    if (dateNowMonth < birthDateMonth && birthDateDay < dateNowDay)
        monthes = 12 - (birthDateMonth - dateNowMonth);
    else if (dateNowMonth < birthDateMonth)
        monthes = 12 - (birthDateMonth - dateNowMonth + 1);
    if (dateNowMonth == birthDateMonth && birthDateDay > dateNowDay)
        monthes = 11;
    /** Calcula los dias */
    var days = 0;
    if (dateNowDay > birthDateDay)
        days = dateNowDay - birthDateDay;
    if (dateNowDay < birthDateDay) {
        var ultimodaymonth = new Date(dateNowYear, dateNowMonth - 1, 0);
        days = ultimodaymonth.getDate() - (birthDateDay - dateNowDay);
    }
    return "Edad de Carlos Coloch: ".concat(ageFull, " A\u00F1o(s), ").concat(monthes, " mes(es), ").concat(days, " dia(s),");
}
