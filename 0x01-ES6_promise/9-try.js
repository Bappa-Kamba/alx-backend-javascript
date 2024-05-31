export default function guadrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    if (result) {
      queue.push(result);
      queue.push('Guardrail was processed');
    }
  } catch (error) {
	queue.push(String(error));
    queue.push('Guardrail was processed');
  }

  return queue;
}
