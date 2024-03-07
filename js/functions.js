function getMyStr (str, mynumber) {
  return str.length <= mynumber;
}

getMyStr ('длиннаястрока', 10);
getMyStr ('длиннаястрока', 30);

function getStrgPol (string) {
  let strNorm = string.replaceAll(' ', '');
  strNorm = strNorm.toUpperCase();
  let strReverse = '';

  for (let i = strNorm.length - 1; i >= 0; i--) {
    strReverse += strNorm[i];
  }
  return strNorm === strReverse;
}
getStrgPol ('дед');
getStrgPol ('Шалаш');
getStrgPol ('Шалаш Шалаш Шалаш');
getStrgPol ('Интересное задание спасибо за проверку');

function checkNormLengthDay (dayStart,dayEnd, startConference, lengthConference) {
  const dayStartSplit = dayStart.split(':');
  const dayStartMin = Number(dayStartSplit[0]) * 60 + Number(dayStartSplit[1]);
  const dayEndSplit = dayEnd.split(':');
  const dayEndMin = Number(dayEndSplit[0]) * 60 + Number(dayEndSplit[1]);
  const startConferenceSplit = startConference.split(':');
  const startConfernceMin = Number(startConferenceSplit[0]) * 60 + Number(startConferenceSplit[1]);
  const endConferenceMin = startConfernceMin + Number(lengthConference);
  return dayStartMin <= startConfernceMin && endConferenceMin <= dayEndMin;
}

checkNormLengthDay('08:00', '17:30', '14:00', 90);
checkNormLengthDay('8:0', '10:0', '8:0', 120);
checkNormLengthDay('08:00', '14:30', '14:00', 90);
checkNormLengthDay('14:00', '17:30', '08:00', 90);
checkNormLengthDay('8:00', '17:30', '08:00', 900);
