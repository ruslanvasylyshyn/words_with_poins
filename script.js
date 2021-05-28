'use strict'

function pointsToArray(word) {

    const lettersArray = word.split('');
    const wordsArray = [];
  
    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = word.substring(0, i+ 1) + '.' + word.substring(i+ 1);

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = '.' + word.substring(0, i+ 1) + '.' + word.substring(i+ 1);

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = '.' + word.substring(0, i+ 1) + '.' + word.substring(i+ 1) + '.';

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = word.substring(0, i+ 1) + '.' + word.substring(i+ 1) + '.';

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = word.substring(0, i+ 1) + '.' + word.substring(i+ 1, i+ 2) + '.' + word.substring(i+ 2);

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = '.' + word.substring(0, i+ 1) + '.' + word.substring(i+ 1, i+ 2) + '.' + word.substring(i+ 2);

      wordsArray.push(newWorld);
    }


    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = '.' + word.substring(0, i+ 1) + '.' + word.substring(i+ 1, i+ 2) + '.' + word.substring(i+ 2) + '.';

      wordsArray.push(newWorld);
    }

    for (let i = 0; i <= lettersArray.length; i++) {
      let newWorld = word.substring(0, i+ 1) + '.' + word.substring(i+ 1, i+ 2) + '.' + word.substring(i+ 2) + '.';

      wordsArray.push(newWorld);
    }

    const threePointsRemoveArray = wordsArray.map(word => word.replace(/\.\./, '.'));
    const twoPointsRemoveArray = threePointsRemoveArray.map(word => word.replace(/\.\./, '.'));
    const duplicateFilteredArray = twoPointsRemoveArray.filter((item, index) => twoPointsRemoveArray.indexOf(item) === index);


    console.table(duplicateFilteredArray);


  }

  pointsToArray('abc');
