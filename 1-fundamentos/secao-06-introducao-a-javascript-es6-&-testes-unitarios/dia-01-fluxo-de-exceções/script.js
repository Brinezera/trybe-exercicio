const findPersonByName = (name) => {
  let person;
  try {
    for (let index = 0; index < clients.length; index += 1) {
      if (clients[index].name === name) {
        person = clients[index];
      }
    }
    if (!person) {
      throw new Error('Pessoa não encontrada, tente novamente');
    }
    const receiverName = `Destinatário: ${person.name}`;
    const fullAddress = `Endereço: ${person.address.street}, ${person.address.number}, ${person.address.neighborhood}, ${person.address.city} - ${person.address.state}`;
    const cep = `CEP: ${person.address.cep}`;
    return `${receiverName}. ${fullAddress}. ${cep}`;
  } catch (error) {
    return error.message;
  }
};
console.log(findPersonByName('Ana Santos'));
console.log(findPersonByName('Ana Silva'));

const arrayValidation = (array) => {
  if (array.length === 0) {
    throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
  }
};

const findPeopleByState = (state) => {
  try {
    let people = [];
    for (let index = 0; index < clients.length; index += 1) {
      if (clients[index].address.state === state) {
        people.push(clients[index].name);
      }
    }
    arrayValidation(people);
    return people;
  } catch (error) {
    return error.message;
  }
};

console.log(findPeopleByState('SP'));
console.log(findPeopleByState('AC'));
