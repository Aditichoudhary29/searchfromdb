const mongoose = require('mongoose');





const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:aditi%4012345678@cluster0.z38shnd.mongodb.net/assignment', {
      useNewUrlParser: true, // This option is now the default
      useUnifiedTopology: true, // This option is now the default
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

const items = [
  { name: 'Item1', description: ' What is React' },
  { name: 'Item2', description: 'What is express' },
  { name: 'Item3', description: 'hello' },
  { name: 'Item4', description: 'Description of Item4' },
];

const insertData = async () => {
  try {
    await Item.insertMany(items);
    console.log('Sample data inserted');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  }
};

const runSeed = async () => {
  await connectDB();
  await insertData();
};

runSeed();

