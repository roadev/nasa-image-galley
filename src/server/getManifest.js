import fs from 'fs';

const getManifest = () => {
  try {
    if (process.env.ENV === 'production') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
    }
    
  } catch (err) {
    console.error(err);
  }
};

export default getManifest;
