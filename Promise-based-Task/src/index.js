const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    if (!data || !Array.isArray(data)) {
      throw new Error('There is an error while getting data');
    }
    const titles = data.map(todo => todo.title);

    console.log(titles)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
})()
