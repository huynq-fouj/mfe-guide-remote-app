import { Injectable } from '@angular/core';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { encrypt } from '../utils/crypto';

@Injectable({ providedIn: 'root' })
export class FingerPrintService {
  private visitorId?: string;

  async getDeviceId(): Promise<string> {
    if (this.visitorId) {
      return this.visitorId;
    }

    const stored = localStorage.getItem('dvc-k');

    if (stored) {
      this.visitorId = stored;
      return this.visitorId;
    }

    const fp = await FingerprintJS.load();
    const result = await fp.get();
    this.visitorId = encrypt(result.visitorId);
    localStorage.setItem('dvc-k', this.visitorId);
    return this.visitorId;
  }
}
