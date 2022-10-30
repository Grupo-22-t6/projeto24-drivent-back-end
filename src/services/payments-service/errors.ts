import { ApplicationError } from '@/protocols';

export function creditCardExpired(): ApplicationError {
  return {
    name: 'creditCardExpired',
    message: 'This credit card has expired!',
  };
}
