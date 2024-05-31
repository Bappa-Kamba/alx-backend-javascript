export default function guadrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    if (result) {
      queue.push(result);
      queue.push('Guadrail was processed');
    }
  } catch (error) {
    queue.push(error.message);
    queue.push('Guadrail was processed');
  }

  return queue;
}
