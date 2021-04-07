let n = 5;
let asterisknumber = 1;

  for (let indexLine = 1; indexLine <= n; indexLine += 1) {
    let line = '';
    let refnumber = (n - asterisknumber) / 2;
    for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
      if (indexColumn <= refnumber || indexColumn > refnumber + asterisknumber) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    asterisknumber += 2;
    console.log(line);
    if (refnumber === 0) {
      break
    }
  }
