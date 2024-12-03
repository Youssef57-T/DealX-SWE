import User from '../models/user.js';

// Create a new user
export const getUser = async (req, res) => {
  const { email, password_hash } = req.body;

  // Debugging logs
  console.log('Request body received:', req.body);

  // Check for missing values
  // if (!email || !password_hash) {
  //   console.log('Missing email or password_hash');
  //   return res.status(400).json({ message: 'Email and password are required.' });
  // }

  try {
    console.log('Checking if user already exists in the database...');
    const start = Date.now(); // Start measuring execution time
    console.log(email , password_hash)
    const existingUser = await User.findOne({
      
      where: { email, password_hash}, // Replace if necessary
    });
    
    const end = Date.now(); // End measuring execution time
    console.log(`Query execution time: ${end - start}ms`);
    console.log('Existing user:', existingUser);

    if (existingUser) {
      console.log('User already exists, returning response.');
      return res.status(200).json({ message: 'User already exists', user: existingUser });
    }

    // Uncomment below to create the new user
    // console.log('Creating new user...');
    // const newUser = await User.create({ email, password_hash });

    console.log('User created successfully');
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:');
    return res.status(500).json({ message: 'An error occurred', error });
  }
};

// Get all users (Example method)
export const createUser = async (req, res) => {
  const { username ,  email , address , phone_number, password_hash  ,full_name,type ="admin"} = req.body;
  try {
    // Create a new customer first

    const user = await User.create({
      username, 
      email,
      address,
      phone_number,
      password_hash,
      full_name, 
      type 
    });

    // Then create a user linked to the customer
    // const user = await User.create({
    //   customer_id: customer.customer_id,
    // });

    res.status(200).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};
