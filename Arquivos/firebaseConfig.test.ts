import { addTestData } from '../firebaseConfig';

async function run() {

  try {
    await addTestData();
    console.log('addTestData executed successfully.');
  } catch (error) {
    console.error('Failed to execute addTestData:', error);
  }
}

run();