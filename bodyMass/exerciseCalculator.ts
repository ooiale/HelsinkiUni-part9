export const calculateExercises = (info: number[], target: number) => {
  const periodLength = info.length;
  const trainingDays = info.filter(i => i > 0).length;
  //target
  const average = info.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0) / info.length;

  const success = average >= target;

  let rating = 1;

  if (target - 0.1 * target <= average && average <= target + 0.1 * target) {
    rating = 2;
  } else if (average > target + 0.1 * target) {
    rating = 3;
  }

  let ratingDescription = "";
  switch (rating) {
    case 1: ratingDescription = 'bad performance'; break;
    case 2: ratingDescription = 'ok performance'; break;
    case 3: ratingDescription = 'good performance'; break;
  }
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };

};

const parseArguments2 = (args: string[]) => {
  const days = args.slice(2,args.length - 1);
  const target = args[args.length - 1];
  
  const days_num = days.map(d => {
    if (isNaN(Number(d))) {
      throw new Error ('arguments must all be numbers');
    }
    return Number(d);
  });
  if (isNaN(Number(target))) {
    throw new Error ('arguments must all be numbers');
  }


  return {
    info: days_num,
    target: Number(target)
  };
};

if (require.main === module) {
  try {
    const {info, target} = parseArguments2(process.argv);
    console.log(calculateExercises(info, target));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

