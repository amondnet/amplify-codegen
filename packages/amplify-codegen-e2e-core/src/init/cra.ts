/* commands for a Create React App */
import { nspawn as spawn } from '..';

const defaultSettings = {
  disableCIDetection: false,
};

export function craInstall(cwd: string, settings: Object = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = { ...defaultSettings, ...settings };
    const chain = spawn('npm', ['install'], { cwd, stripColors: true, disableCIDetection: s.disableCIDetection });

    chain.run((err: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function craBuild(cwd: string, settings: Object = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = { ...defaultSettings, ...settings };
    const chain = spawn('npm', ['run', 'build'], { cwd, stripColors: true, disableCIDetection: s.disableCIDetection });

    chain.run((err: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
