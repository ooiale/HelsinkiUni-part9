export const calculateBmi = (height: number, weight: number): string => {
  const heigh_meters = height/100;
  const bmi: number = weight / heigh_meters ** 2;
  if (bmi < 18) return 'underweight';
  else if (bmi < 25) return 'Normal (healthy weight)';
  else if (bmi < 30) return 'overweight';
  else return 'obese';
};

const parseArguments = (args: string[]) => {
  if (args.length < 4) {
    throw new Error('little arguments');
  }
  const height = Number(process.argv[2]);
  const weight = Number(process.argv[3]);
  
  if (!isNaN(height) && !isNaN(weight)) {
    return {
      height,
      weight
    };
  } else {
    throw new Error('arguments are not valid numbers');
  }
};

if (require.main === module) {
  try {
    const {height, weight} = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
