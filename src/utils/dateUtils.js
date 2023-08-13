export function formatDate(fecha, formato) {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const formatMap = {
      "YYYY": year,
      "YY": String(year).slice(-2),
      "MM": month,
      "DD": day,
      "hh": hours,
      "mm": minutes,
      "ss": seconds,
    };
    const formatRegex = new RegExp(Object.keys(formatMap).join("|"), "g");
    return formato.replace(formatRegex, (match) => formatMap[match]);
}

  