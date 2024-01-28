import { readdir } from 'fs/promises';

export const getSubdirectories = async (source: string): Promise<string[]> => {
  const entries = await readdir(source, {
    withFileTypes: true
  });
  return entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
};
